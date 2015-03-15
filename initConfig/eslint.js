module.exports = function() {
  'use strict';

  return {
    src: {
      files: {
        src: ['index.js', 'lib/**/*.js']
      }
    },
    grunt: {
      files: {
        src: ['Gruntfile.js']
      }
    },
    tests: {
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
