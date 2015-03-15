module.exports = function() {
  'use strict';

  return {
    default: [['eslint']],
    dox: [['shell:dox_lib']],
    build: [['default', 'shell:dist']],
    install: [['shell:install']],
    dist: [['default', 'shell:dist', 'uglify:dist', 'dox']],
    test: [['build', 'shell:test_lib']]
  };
};
