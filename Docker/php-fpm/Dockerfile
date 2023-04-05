FROM php:fpm-alpine3.17

COPY ./conf/www.conf /usr/local/etc/php-fpm.d/www.conf
COPY ./conf/zz-docker.conf /usr/local/etc/php-fpm.d/zz-docker.conf

RUN apk add composer php81-session php81-tokenizer php81-xml \
    php81-dom php81-xmlwriter php81-fileinfo && \
    docker-php-ext-install pdo_mysql