module.exports = function(grunt) {
  'use strict';

  return {
    default: [['jshint']],
    dox: [['shell:dox_lib']],
    build: [['default', 'shell:dist']],
    install: [['shell:install']],
    dist: [['default', 'shell:dist', 'uglify:dist', 'dox']],
    test: [['build', 'shell:test_lib']]
  };
};
