import { Given, When, Then } from 'cucumber';
import { browser, by, element, ExpectedConditions } from 'aurelia-protractor-plugin/protractor';

Given('As a regular user of my site {string}', (text) => {
  return browser.get(text)
});

When('I open my site', () => {
  var condition = ExpectedConditions.visibilityOf(element(by.className('start')));
  browser.wait(condition, 5000);
});

Then('I should see the button {string}', (text) => {
  var condition = ExpectedConditions.visibilityOf(element(by.name(text)));
  return ;//browser.wait(condition, 6000);
});
