import {Config} from "protractor";

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: [
        './tests/calculator.spec.js',
        // './tests/multiForm.spec.js'
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true,
    SELENIUM_PROMISE_MANAGER: false
};