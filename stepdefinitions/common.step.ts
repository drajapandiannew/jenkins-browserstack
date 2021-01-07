import { browser } from 'protractor';

const { Before, setDefaultTimeout } = require('cucumber');

setDefaultTimeout(60 * 1000);

Before(function (scenario, callback) {
  browser.scenarioname = scenario.pickle.name;
  callback();
});