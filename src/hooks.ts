import { defineSupportCode } from 'cucumber';
import { browser } from 'aurelia-protractor-plugin/protractor';

defineSupportCode(({ After }) => {
    After(() => {
        return browser.quit();
    });
});
