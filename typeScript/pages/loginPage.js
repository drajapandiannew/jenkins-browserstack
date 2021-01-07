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
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const emailInput = '//*[@type="email"]';
const nextButton = '//*[@type="submit"]';
const passwordInput = '//*[@id="passwordInput"]';
const signinButton = '//*[@id="submitButton"]';
const email = ''; // update with your email
const password = ''; // update with your password
var EC = protractor_1.protractor.ExpectedConditions;
class LoginPage {
    login() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.LoginPage = LoginPage;
