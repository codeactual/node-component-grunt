module.exports = function() {
  'use strict';

  this
    .demand('mochaShelljsOpt', {stdout: true, stderr: false})
    .demand('projName', 'gitemplate_name')
    .demand('klassName', 'Gitemplate_klass')
    .demand('instanceName', 'gitemplate_instance');
};
