module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    eslint: {
      target: ['*.js', 'initConfig/**/*.js', '*.json']
    }
  });

  grunt.registerTask('default', ['eslint']);
};
