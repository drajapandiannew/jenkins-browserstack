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
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
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
        // const emailEle = element(by.xpath(emailInput));
        // const pswdEle = element(by.xpath(passwordInput));
        // await browser.driver.wait(EC.visibilityOf(emailEle), 10000);
        // await browser.driver.findElement(by.xpath(emailInput)).sendKeys(email);
        // await browser.driver.findElement(by.xpath(nextButton)).click();
        // await browser.driver.wait(EC.visibilityOf(pswdEle), 30000);
        // await browser.driver.findElement(by.xpath(passwordInput)).sendKeys(password);
        // await browser.driver.findElement(by.xpath(signinButton)).click();
        // await browser.sleep(1000);
        yield protractor_1.browser.waitForAngularEnabled(true);
    }),
    multiCapabilities: [{
            browserName: 'chrome',
            shardTestFiles: true,
            platformName: 'windows',
            maxInstances: 30,
            version: '84.0',
            chromeOptions: {
                args: ['disable-infobars']
            },
            metadata: {
                app: {
                    name: 'TGPP-UI',
                    version: '1.4.5'
                },
                browser: {
                    name: "chrome",
                    version: "84.0"
                },
                device: 'N/A',
                platform: {
                    name: 'Windows',
                    version: '10'
                }
            },
        }
    ],
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
