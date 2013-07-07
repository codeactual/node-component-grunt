module.exports = function() {
  'use strict';

  return {
    src: {
      options: {
        node: true
      },
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
      options: {
        expr: true,
        node: true
      },
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
