module.exports = function(grunt) {
  'use strict';

  return {
    options: {
      failOnError: true
    },
    install: {
      command: 'component install'
    },
    dist: {
      command: 'component build --standalone <%= instanceName %> --name <%= projName %> --out dist'
    },
    test_lib: {
      options: this.learn('initConfig.mochaShelljsOpt'),
      command: 'mocha --harmony --colors --recursive --reporter spec test/lib'
    },
    dox_lib: {
      command: 'apidox --input lib/<%= projName %>/index.js --output docs/<%= klassName %>.md'
    }
  };
};
