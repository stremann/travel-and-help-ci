# Travel and Help: Travis-CI [![Build Status](https://travis-ci.org/stremann/travel-and-help-ci.svg?branch=master)](https://travis-ci.org/stremann/travel-and-help-ci)

![EPAM Systems](http://stremann.github.io/assets/images/logo.svg)

### System requirements:
- node -v ~5.9.0
- npm -v ~3.7.3
- cordova -v ~6.0.0
- java -v ~1.8.0_45

### Getting started:
```sh
$ git clone [url] travel-and-help-ci
$ cd travel-and-help-ci
```

### Start development:
```sh
$ npm start
```

### Run unit tests:
```sh
$ npm test
```

### Build application:
```sh
$ npm run build
```

### Launch cordova: [manual](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)
```sh
$ cordova create travel-and-help help.and.travel TravelAndHelp
$ cordova platform add android --save
$ cordova build android
$ android avd
$ cordova emulate android
```