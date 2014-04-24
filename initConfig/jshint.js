module.exports = function() {
  'use strict';

  var defOptions = {
    node: true,
    esnext: true
  };

  return {
    src: {
      options: defOptions,
      files: {
        src: ['index.js', 'lib/**/*.js']
      }
    },
    grunt: {
      files: {
        src: ['Gruntfile.js'],
      }
    },
    tests: {
      options: this.assimilate(defOptions, {expr: true}),
      files: {
        src: ['test/**/*.js']
      }
    },
    json: {
      files: {
        src: ['*.json']
      }
    }
  };
};
