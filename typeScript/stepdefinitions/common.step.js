"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const { Before, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
Before(function (scenario, callback) {
    protractor_1.browser.scenarioname = scenario.pickle.name;
    callback();
});
