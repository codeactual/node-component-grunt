module.exports = function(grunt) {
  'use strict';

  var testLibCmd = 'mocha --colors --recursive --reporter spec test/lib';

  return {
    options: {
      failOnError: true
    },
    test_lib: {
      options: this.learn('initConfig.mochaShelljsOpt'),
      command: testLibCmd
    },
    dox_lib: {
      command: 'apidox --input lib/<%= projName %>/index.js --output docs/<%= klassName %>.md'
    }
  };
};
