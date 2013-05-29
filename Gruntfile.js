module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      src: {
        files: {
          src: ['*.js', 'initConfig/**/*.js', '*.json']
        }
      }
    }
  });

  grunt.registerTask('default', ['jshint']);
};
