// ============================================================
//	1. Use npm to install Protractor Globally via terminal
//	npm install -g protractor
//
//	2. Terminal tab 1: webdriver-manager start
//	3. Terminal tab 2: protractor protractor.conf.js
//
// ============================================================
exports.config = {
    baseUrl: 'http://localhost:81', // <--- Make sure this is correct
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
       'scenarios.js',
    ],
    capabilities: {
		'browserName': 'chrome'
	},
	framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
        // Login
        browser.ignoreSynchronization = true; // Set ignore synchronization for testing a non-angular page
        browser.get(browser.baseUrl);
        browser.sleep(10000); // sleeping 10 seconds so we can input the username and password
        var searchForm = browser.driver.findElement(By.tagName('form'));
        searchForm.findElement(By.name('j_username')).sendKeys('HERE');
        searchForm.findElement(By.name('j_password')).sendKeys('HERE');
        element.all(by.css('.submit')).first().click();
        return browser.driver.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
                return /index/.test(url);
            });
        }, 10000);
        
    }
};