// ============================================================
// Helpers
// ============================================================
module.exports = {
    
    // Wait for loader to complete
    waitForLoader: function(callback){
        browser.driver.wait(function() {
            //console.log("WAITING... for .dialog-load-cover to be removed");
            return browser.driver.isElementPresent(by.css('.dialog-load-cover')).then(function(el) {
                return el === false;
            });
        }).
        then(function() {
            //console.log("COMPLETE!");
            callback();
        });
    }
};