FROM node:alpine
MAINTAINER wj "wj.dev@qq.com"
ENV TIMEZONE    Asia/Shanghai
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN apk add -U tzdata
RUN cp /usr/share/zoneinfo/${TIMEZONE} /etc/localtime
RUN echo "${TIMEZONE}" > /etc/timezone

WORKDIR /app
COPY ./package.json /app/
RUN npm install

COPY . /app/
RUN npm run build

ENV EGG_SERVER_ENV prod

RUN npm start
EXPOSE 7001
