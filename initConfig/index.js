module.exports = function() {
  'use strict';

  this.demand('initConfig.mochaShelljsOpt', {stdout: true, stderr: false});
  this.demand('initConfig.harmony', this.age.satisfies(process.version, '>=0.11.9'));
};
