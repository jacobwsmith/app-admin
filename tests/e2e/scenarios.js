/*
// protractor conf.js
*/
var helpers = require('./helpers.js');

// ============================================================
// Template Scenarios
// - Check title
// ============================================================
describe('Template App', function() {
    
    browser.get('/prototypes/template/index.htm');
    
    // Wait for page and AJAX to load
    helpers.waitForLoader(function() {});
    browser.sleep(1000); // <-- sleeping one second waiting for data populate the templates

    it('Template App should have a title', function() {
        expect(browser.getTitle()).toEqual('Template');
    });

    it('Template App should have a H1', function() {
        expect(element(by.tagName('h1')).getText()).toEqual("Template");
    });

    it('Template App should have a Summary', function(){
        expect(element.all(by.tagName('h3')).first().getText()).toEqual("Summary");
    });

    it('Template App should have a Table', function(){
        expect(element.all(by.tagName('h3')).last().getText()).toEqual("Table");
    });
    
    // Check console logs (NOT WORKING IN LATEST CHROME)
    // it('Admin Dashboard has no console logs', function() {
    //     browser.manage().logs().get('browser').then(function(browserLog) {
    //         expect(browserLog.length).toEqual(0);
    //         console.log('log: ' + require('util').inspect(browserLog));
    //     });
    // });

});