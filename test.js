var fs = require('fs');
var system = require('system');
var ddoc = system.args[1];
var origReq = require;

console.log('Testing '+ddoc);
try {
    var validateFile = ddoc+fs.separator+'validate_doc_update.js';
    if(fs.exists(validateFile)) {
        console.log("\tValidation:");
        var validateTestFile = ddoc+fs.separator+'tests'+fs.separator+'validate_doc_update.js';
        if(fs.exists(validateTestFile)) {
            (function(){
                var require = function(mod) {
                    var file = ddoc+fs.separator+mod+'.js';
                    if(!fs.exists(file)) throw("Required "+file+" does not exists");
                    return (function(){
                            var module = {exports: {}}
                            var exports = module.exports;
                            eval(fs.read(file));
                            return module.exports;
                        })();
                    //return origReq(ddoc+"/"+mod);
                };
                eval('var test = '+fs.read(validateTestFile)+';');
                eval('var validate_doc_update = '+fs.read(validateFile)+';');
                var doNotValidate = function(doc) {
                    try {
                        validate_doc_update(doc);
                    } catch(ex) {
                        return;
                    }
                    throw({shouldNotValidate: doc});
                };
                var validate = function(doc) {
                    try {
                        validate_doc_update(doc);
                    } catch(ex) {
                        throw({shouldValidate: doc, execption: ex});
                    }
                };
                test();
                console.log("\t\tValidation passed.");
            })();
        } else {
            console.log("WARN: no validate_doc_update tests.");
        }
    } else {
        console.log("WARN: no validate_doc_update.");
    }

    var specFiles = fs.list(ddoc+fs.separator+'specs');
    for(var i in specFiles) {
        var file = ddoc+fs.separator+'specs'+fs.separator+specFiles[i];
        if(!fs.isDirectory(file) && fs.isReadable(file)){
            var spec = JSON.parse(fs.read(file));
            console.log("\tSpec: "+ spec.refer);
            console.log("\t\tDesc: "+ spec.description);
            var type = spec.refer.split('/')[0];
            var name = spec.refer.split('/')[1];
            if(type == 'view') {
                var mapFile = ddoc+fs.separator+'views'+fs.separator+name+fs.separator+"map.js";
                var reduceFile = ddoc+fs.separator+'views'+fs.separator+name+fs.separator+"reduce.js";
                var testFile = ddoc+fs.separator+'tests'+fs.separator+'views'+fs.separator+name+".js";
                if(!fs.exists(mapFile)) {
                    throw("\t\tERROR: Specified view does not exists!");
                } else if(!fs.exists(testFile)) {
                    console.log("\t\tWARN: Specified view test does not exists!");
                } else {
                    (function(){
                        eval('var test = '+fs.read(testFile)+';');
                        eval('var map = '+fs.read(mapFile)+';');

                        var emitted = [];
                        var emit = function(key,value) {
                            emitted.push([key,value]);
                        };
                        var emits = function(input,output){
                            for(var i in input) {
                                map(input[i]);
                            }
                            if(JSON.stringify(emitted) != JSON.stringify(output)) {
                                throw({expected: output, got: emitted});
                            } else {
                                console.log("\t\tMap: passed.");
                            }
                        };

                        if(fs.exists(reduceFile)) {
                            eval('var reduce = '+fs.read(reduceFile));
                            var reduces = function(output) {
                                var keyvalue = {};
                                for(var i in emitted) {
                                    var key = emitted[i][0];
                                    var value = emitted[i][1];
                                    if(typeof keyvalue[key] != "object") {
                                        keyvalue[key] = []; 
                                    }
                                    keyvalue[key].push(value);
                                }
                                var reduced = [];
                                for(var k in keyvalue) {
                                    reduced.push( [k, reduce(k,keyvalue[k],false) ] );
                                }
                                if(JSON.stringify(reduced) != JSON.stringify(output)) {
                                    throw({expected: output, got: reduced});
                                } else {
                                    console.log("\t\tReduce: passed.");
                                }
                            };
                        } else {
                            console.log("\t\tReduce: N/A");
                        }

                        test();
                    })();
                }
            }
        }
    }
    console.log("PASSED!");
    phantom.exit(0);
} catch (err) {
    console.log(JSON.stringify(err,null,2));
    console.log("FAILED!");
    phantom.exit(-1);
}

