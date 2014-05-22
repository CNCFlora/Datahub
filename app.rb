Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8

require 'sinatra'
require_relative 'utils'


get "/" do
    redirect "index.html"
end

