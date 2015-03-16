module.exports = function exports() {
  'use strict';

  const defOptions = {
    envs: [
      'node',
      'es6'
    ],
    rules: {
      'block-scoped-var': 1,
      'camelcase': 0,
      'func-names': 1,
      'key-spacing': 0,
      'no-catch-shadow': 1,
      'no-console': 1,
      'no-div-regex': 1,
      'no-eq-null': 1,
      'no-floating-decimal': 1,
      'no-multiple-empty-lines': 1,
      'no-process-exit': 0,
      'no-self-compare': 1,
      'no-shadow': 0,
      'no-throw-literal': 1,
      'no-undefined': 1,
      'no-use-before-define': ['nofunc'],
      'no-var': 1,
      'no-void': 1,
      'no-warning-comments': 1,
      'quotes': [2, 'single', 'avoid-escape'],
      'radix': 1,
      'vars-on-top': 1,
      'wrap-iife': 1
    },
    globals: [
      'describe',
      'it',
      'before',
      'beforeEach',
      'after',
      'afterEach'
    ]
  };
  const testOpts = this.assimilate(true, {}, defOptions, {rules: {'func-names': 0}});

  return {
    options: defOptions,
    src: {
      src: ['index.js', 'lib/**/*.js']
    },
    grunt: {
      src: ['Gruntfile.js']
    },
    tests: {
      options: testOpts,
      src: ['test/**/*.js']
    }
  };
};
