FROM cncflora/ruby

RUN apt-get install openjdk-7-jdk couchdb wget -y

RUN wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.2.0.deb -O /root/elasticsearch-1.2.0.deb && \
    dpkg -i /root/elasticsearch-1.2.0.deb

RUN sed -i -e 's/;bind_address = 127.0.0.1/bind_address = 0.0.0.0/' /etc/couchdb/local.ini
RUN mkdir /var/run/couchdb

RUN gem install sinatra && gem install unicorn

ADD bot.rb /root/bot.rb
ADD start.sh /root/start.sh
RUN chmod +x /root/bot.rb
RUN chmod +x /root/start.sh

VOLUME ["/var/lib/couchdb"]

EXPOSE 5984
EXPOSE 9200
EXPOSE 8080

CMD ["/root/start.sh"]

