import { browser, element, by, protractor } from 'protractor';

const emailInput = '//*[@type="email"]';
const nextButton = '//*[@type="submit"]';
const passwordInput = '//*[@id="passwordInput"]';
const signinButton = '//*[@id="submitButton"]';
const email = ''; // update with your email
const password = ''; // update with your password
var EC = protractor.ExpectedConditions;


export class LoginPage {
  
  public async login() {
    const emailEle = element(by.xpath(emailInput));
    const pswdEle = element(by.xpath(passwordInput));
    await browser.driver.wait(EC.visibilityOf(emailEle), 10000);
    await browser.driver.findElement(by.xpath(emailInput)).sendKeys(email);
    await browser.driver.findElement(by.xpath(nextButton)).click();  
    await browser.driver.wait(EC.visibilityOf(pswdEle), 30000);
    await browser.driver.findElement(by.xpath(passwordInput)).sendKeys(password);
    await browser.driver.findElement(by.xpath(signinButton)).click();
    await browser.sleep(1000);
    await browser.waitForAngularEnabled(true);
  }

}
