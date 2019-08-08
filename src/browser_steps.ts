import { defineSupportCode } from 'cucumber';
import { browser, by, element, ExpectedConditions } from 'aurelia-protractor-plugin/protractor';


defineSupportCode(function({ Given, When, Then }) {
    Given('I am on the aurelia js org web site', () => {
        return browser.get('http://aurelia.io/')
    });

    When('I click on {stringInDoubleQuotes}', (text) => {
        var condition = ExpectedConditions.visibilityOf(element(by.linkText(text)));
        browser.wait(condition, 5000);
        return element(by.linkText(text)).click();
    });

    Then('I should see {stringInDoubleQuotes}', (text) => {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = ExpectedConditions.visibilityOf(element(by.xpath(xpath)));
        return browser.wait(condition, 5000);
    });
});
