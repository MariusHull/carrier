FROM nginx:alpine
LABEL maintainer="marius.hullin@gmail.com"

RUN rm /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/default.conf

RUN rm /etc/nginx/nginx.conf
ADD nginx.conf /etc/nginx/nginx.conf
