FROM cncflora/ruby

RUN sed 's/main$/main universe/' -i /etc/apt/sources.list && \
    apt-get update && apt-get install -y software-properties-common python-software-properties && \
    add-apt-repository ppa:webupd8team/java -y && \
    apt-get update && \
    echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get install -y oracle-java7-installer

RUN wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.3.2.deb -O /root/elasticsearch-1.3.2.deb && \
    dpkg -i /root/elasticsearch-1.3.2.deb

RUN apt-get install supervisor couchdb wget -y

RUN mkdir /var/log/supervisord

RUN sed -i -e 's/;bind_address = 127.0.0.1/bind_address = 0.0.0.0/' /etc/couchdb/local.ini
RUN mkdir /var/run/couchdb

RUN apt-get install apache2 -y && a2enmod proxy && a2enmod proxy_http
RUN mkdir /var/lock/apache2
ADD public /var/www/public
ADD default.conf /etc/apache2/sites-available/000-default.conf
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/apache2.pid

RUN gem install small-ops -v 0.0.30

ADD supervisord.conf /etc/supervisor/conf.d/proxy.conf
ADD bot.rb /root/bot.rb
ADD log4j.properties /root/log4j.properties
RUN chmod +x /root/bot.rb

VOLUME ["/var/lib/couchdb"]

EXPOSE 80

CMD [ "supervisord" ]

