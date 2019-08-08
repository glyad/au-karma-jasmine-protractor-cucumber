import { Given, When, Then } from 'cucumber';
import { browser, by, element, ExpectedConditions } from 'aurelia-protractor-plugin/protractor';



    Given('I am on the aurelia js org web site', () => {
        return browser.get('http://aurelia.io/')
    });

    When('I click on {string}', (text) => {
        var condition = ExpectedConditions.visibilityOf(element(by.className('start')));
        browser.wait(condition, 6000);
        return element(by.className('start')).click();
    });

    Then('I should see {string}', (text) => {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = ExpectedConditions.visibilityOf(element(by.linkText(text)));
        return browser.wait(condition, 6000);
    });

