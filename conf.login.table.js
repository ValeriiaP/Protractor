exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {defaultTimeoutInterval: 180000},
    specs: [
        './tests/webTables.spec.js',
        './tests/login.spec.js'
      ]
}