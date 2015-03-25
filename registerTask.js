module.exports = function exports() {
  'use strict';

  return {
    default: [['eslint']],
    dox: [['shell:dox_lib']],
    test: [['shell:test_lib']]
  };
};
