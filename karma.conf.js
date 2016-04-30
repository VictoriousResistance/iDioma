var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], // Run tests in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'client/tests.webpack.js' // load entry points for our tests
    ],
    preprocessors: {
      'client/tests.webpack.js': [ 'webpack', 'sourcemap' ], // Preprocess test files with webpack and sourcemap-loader plugins
    },
    reporters: [ 'spec' ], // We'll use the spec reporter rather than the default 'dots' or 'progress' reporters.
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: false,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },
    webpack: webpackConfig,
  });
};