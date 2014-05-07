module.exports = function(grunt) {
  'use strict';

  var testLibCmd = 'mocha --harmony --colors --recursive --reporter spec test/lib';

  if (this.learn('initConfig.harmony')) {
    // Insert `--require co-mocha` before the last argument.
    testLibCmd = testLibCmd.split(' ');
    testLibCmd.splice(-1, 0, '--require', 'co-mocha');
    testLibCmd = testLibCmd.join(' ');
  }

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
      command: testLibCmd
    },
    dox_lib: {
      command: 'apidox --input lib/<%= projName %>/index.js --output docs/<%= klassName %>.md'
    }
  };
};
