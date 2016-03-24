module.exports = (config) => {
    config.set({
        basePath: 'test',

        frameworks: ['jasmine'],

        files: [
            {
                pattern: '**/*.spec.js',
                watched: true
            }
        ],

        exclude: [],

        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-sourcemap-loader'),
            require('karma-webpack'),
            require('karma-coverage')
        ],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.spec\.js/,
                        exclude: [/node_modules/],
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.js/,
                        exclude: [/node_modules/, /\.spec\.js/],
                        loader: 'isparta-loader'
                    }

                ]
            }
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            dir: './coverage',
            reporters: [{
                type: 'lcov',
                subdir: './lcov-report'
            }]
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: false
    });
};