/*

// 1. Make sure you have these install via termaial
// npm install -g karma -g karma-junit-reporter karma-chrome-launcher karma-firefox-launcher karma-jasmine karma-phantomjs-launcher karma-ng-html2js-preprocessor
//
// 2. Enter this into terminal
// karma start karma.conf.js
*/
module.exports = function(config) {
    config.set({
        basePath: '../../', // <-- modify this based on location

        files: [
            '../../admin/assets/lib/jquery-2.1/dist/jquery.min.js',
            '../../admin/assets/lib/angular-1.4/angular.min.js',
            '../../admin/assets/lib/angular-1.4/angular-mocks.js',
            '../../admin/assets/lib/angular-1.4/angular-animate.min.js',
            '../../admin/assets/lib/angular-1.4/angular-sanitize.min.js',
            '../../admin/assets/lib/angular-ui/bootstrap/ui-bootstrap-tpls-0.14.3.min.js',
            '../../admin/assets/lib/nielsen/services/nl-modal/nl-modal.js',
            
            'app/app.js',
            'app/app.htm',
            'app/app.spec.js',
            
            'app/data-service/data-service.js',
            'app/data-service/data-service.spec.js',

            'app/summary/summary.js',
            'app/summary/summary.htm',
            'app/summary/summary.spec.js',

            'app/table/table.js',
            'app/table/table.htm',
            'app/table/table.spec.js',
            
        ],

        exclude: [
            
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'], // PhantomJS, Firefox, Chrome

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test-out/unit.xml',
            suite: 'unit'
        },
        
        // Adding for template testing
        preprocessors: {
            'app/**/*.htm': ['ng-html2js']
        },
        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        }

    });
};