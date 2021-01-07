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
// import { browser, protractor, element, by, $ } from 'protractor';
// import { expect } from 'chai';
const loginPage_1 = require("../pages/loginPage");
const { Given, When, Then, setDefaultTimeout, Before } = require('cucumber');
setDefaultTimeout(60 * 20000);
let loginPage = new loginPage_1.LoginPage();
Given('I have successfully logged in', () => __awaiter(void 0, void 0, void 0, function* () {
    // browser.sleep(1000);
    // await browser.get(browser.baseUrl);
    // await loginPage.login();
    // await manageReviewPage.navigateToManageReview();
}));
// Then('I go to Manage Review', async () => {
//   await manageReviewPage.navigateToManageReview();
//   browser.sleep(1000);
// });
