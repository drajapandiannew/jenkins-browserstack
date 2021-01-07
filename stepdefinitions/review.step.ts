// import { browser, protractor, element, by, $ } from 'protractor';
// import { expect } from 'chai';
import { LoginPage } from '../pages/loginPage'

const { Given, When, Then, setDefaultTimeout, Before } = require('cucumber');

setDefaultTimeout(60 * 20000);

let loginPage = new LoginPage();

Given('I have successfully logged in', async () => {
  // browser.sleep(1000);
  // await browser.get(browser.baseUrl);
  // await loginPage.login();
  // await manageReviewPage.navigateToManageReview();
});

// Then('I go to Manage Review', async () => {
//   await manageReviewPage.navigateToManageReview();
//   browser.sleep(1000);
// });