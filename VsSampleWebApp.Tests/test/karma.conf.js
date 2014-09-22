module.exports = function (config) {
    config.set({
        reporters: ['progress', 'junit', 'coverage'],
        basePath: '../..',

        files: [
			'VsSampleWebApp/bower_components/angular/angular.js',
			'VsSampleWebApp/bower_components/angular-route/angular-route.js',
			'VsSampleWebApp/bower_components/angular-mocks/angular-mocks.js',
			'VsSampleWebApp/Scripts/**/*.js',
			'VsSampleWebApp.Tests/test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
                'karma-phantomjs-launcher',
                'karma-junit-reporter',
                'karma-coverage',
                'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'VsSampleWebApp.Tests/test_out/test-results.xml',
            suite: ''
        },
        preprocessors: { 'VsSampleWebApp/Scripts/**/*.js': ['coverage'] },
        coverageReporter: {
            type: 'html',
            dir: 'VsSampleWebApp.Tests/test_out/coverage/'
        }

    });
};