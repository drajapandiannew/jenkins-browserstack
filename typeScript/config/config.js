"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.removeDir = void 0;
const protractor_1 = require("protractor");
const jsonReports = process.cwd() + "/reports/json";
const path = require('path');
const rimraf = require("rimraf");
function removeDir() {
    rimraf('/.tmp', function () { console.log("directory removal done"); });
}
exports.removeDir = removeDir;
exports.config = {
    // sauceUser:"sso-toyota.tcoe-dhivagar.rajapandian",
    // sauceKey:"e23e54f7-b922-481b-b398-1976f80f3edb",
    baseUrl: "https://uat.icsaas.equifax.com/web/decisionportal/welcome",
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    cucumberOpts: {
        require: ["../../typeScript/stepdefinitions/*.step.js", "../../typeScript/support/*.js"],
        tags: '@test',
        format: 'json:.tmp/results.json',
        strict: true
    },
    specs: [
        "../../features/*.feature",
    ],
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        const emailInput = '//*[@type="email"]';
        const nextButton = '//*[@type="submit"]';
        const passwordInput = '//*[@id="passwordInput"]';
        const signinButton = '//*[@id="submitButton"]';
        const email = 'dharani.ramesh@tmnatest.com'; // update with your email
        const password = 'Test@123'; // update with your password
        var EC = protractor_1.protractor.ExpectedConditions;
        const timeout = 5000000;
        // browser.ignoreSynchronization = true;
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.manage().window().maximize();
        protractor_1.browser.driver.manage().deleteAllCookies();
        yield protractor_1.browser.get(protractor_1.browser.baseUrl);
        const emailEle = protractor_1.element(protractor_1.by.xpath(emailInput));
        const pswdEle = protractor_1.element(protractor_1.by.xpath(passwordInput));
        yield protractor_1.browser.driver.wait(EC.visibilityOf(emailEle), 10000);
        yield protractor_1.browser.driver.findElement(protractor_1.by.xpath(emailInput)).sendKeys(email);
        yield protractor_1.browser.driver.findElement(protractor_1.by.xpath(nextButton)).click();
        yield protractor_1.browser.driver.wait(EC.visibilityOf(pswdEle), 30000);
        yield protractor_1.browser.driver.findElement(protractor_1.by.xpath(passwordInput)).sendKeys(password);
        yield protractor_1.browser.driver.findElement(protractor_1.by.xpath(signinButton)).click();
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.browser.waitForAngularEnabled(true);
    }),
    'browserstackUser': 'dhivagarr1',
    'browserstackKey': 'KMHxF5PFDznysTNzJya3',
    'capabilities': {
        'build': 'protractor-browserstack',
        'name': 'single_test',
        'browserName': 'chrome',
        'resolution': '1024x768',
        'browserstack.debug': 'true'
    },
    commandTimeout: 9999999,
    maxDuration: 9999999,
    maxInstances: 30,
    seleniumVersion: "3.142.7",
    chromedriverVersion: "84.0.4147.30",
    // Here the magic happens
    plugins: [{
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                //automaticallyGenerateReport: false,
                removeExistingJsonReportFile: true,
                removeOriginalJsonReportFile: true,
                customData: {
                    title: 'TGPP UI',
                    data: [
                        { label: 'Project', value: 'TGPP UI Daily Build' },
                        { label: 'Release', value: '1.0' },
                        { label: 'Cycle', value: 'Sprint-2' },
                        { label: 'Execution Start Time', value: (new Date()).toLocaleString() },
                    ]
                },
                pageTitle: 'TGPP Review Test Report',
                reportName: 'TGPP Review Test Report',
                pageFooter: '<div><p></p></div>',
                displayDuration: true,
                durationInMS: false,
            }
        }
    ]
};
