module.exports = function() {
  'use strict';

  var distFile = 'dist/' + this.get('projName');
  var distFiles = {};
  distFiles[distFile] = distFile;

  return {
    dist: {
      options: {
        compress: false,
        mangle: false,
        beautify: true
      },
      files: distFiles
    }
  };
};
