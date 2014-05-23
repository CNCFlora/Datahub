FROM cncflora/ruby

RUN apt-get install openjdk-7-jre-headless couchdb wget -y

RUN wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.2.0.deb -O /root/elasticsearch-1.2.0.deb && \
    dpkg -i /root/elasticsearch-1.2.0.deb

RUN sed -i -e 's/;bind_address = 127.0.0.1/bind_address = 0.0.0.0/' /etc/couchdb/local.ini
RUN mkdir /var/run/couchdb

RUN apt-get install apache2 -y && a2enmod proxy && a2enmod proxy_http
ADD public /var/www/public
ADD default.conf /etc/apache2/sites-available/000-default.conf

ADD bot.rb /root/bot.rb
ADD start.sh /root/start.sh
RUN chmod +x /root/bot.rb
RUN chmod +x /root/start.sh

VOLUME ["/var/lib/couchdb"]

EXPOSE 80

CMD ["/root/start.sh"]

