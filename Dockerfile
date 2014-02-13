# CouchDB 

FROM klaemo/couchdb 
MAINTAINER Diogo "kid" <diogo@diogok.net>

ENV APP_USER couchdb 
ENV APP_PASS couchdb

RUN cp /etc/apt/sources.list /etc/apt/sources.list.bkp && sed -e 's/http/ftp/g' /etc/apt/sources.list.bkp > /etc/apt/sources.list
RUN apt-get update -y
RUN apt-get install curl git vim openssh-server tmux sudo aptitude screen wget htop -y

RUN useradd -g users -G sudo -s /bin/bash -m $APP_USER
RUN echo $APP_USER:$APP_PASS | chpasswd
RUN mkdir /var/run/sshd 
RUN chmod 755 /var/run/sshd

EXPOSE 22
EXPOSE 5984

ADD start.sh /root/start.sh
RUN chmod +x /root/start.sh

CMD ["/root/start.sh"]

