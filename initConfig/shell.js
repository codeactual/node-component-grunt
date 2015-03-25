module.exports = function exports() {
  'use strict';

  const testLibCmd = 'mocha --colors --recursive --reporter spec test/lib';

  return {
    options: {
      failOnError: true
    },
    test_lib: {
      options: this.learn('initConfig.mochaShelljsOpt'),
      command: testLibCmd
    },
    dox_lib: {
      command: './node_modules/.bin/apidox --input lib/<%= projName %>/index.js --output docs/<%= klassName %>.md'
    }
  };
};
