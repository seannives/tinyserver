// Karma configuration
// Generated on Tue Jun 04 2013 15:47:23 GMT-0400 (EDT)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
    'public/PlayerProto/test/lib/chai.js',
    'public/PlayerProto/test/helper.js',
    'public/PlayerProto/js/d3.v3.min.js',
    'public/PlayerProto/js/eventmanager.js',
    'public/PlayerProto/js/widget-base.js',
    'public/PlayerProto/js/widget-linegraph.js',
    'public/PlayerProto/js/widget-image.js',
    'public/PlayerProto/js/widget-carousel.js',
    'public/PlayerProto/js/widget-sketch.js',
    'public/PlayerProto/js/submitmanager.js',
    // spec files below here
    'public/PlayerProto/test/spec/widget-base-spec.js',
    'public/PlayerProto/test/spec/widget-linegraph-spec.js',
    'public/PlayerProto/test/spec/widget-carousel-spec.js',
    'public/PlayerProto/test/spec/widget-sketch-spec.js',
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 1338;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
