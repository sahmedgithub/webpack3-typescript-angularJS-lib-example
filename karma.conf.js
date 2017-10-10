module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'source-map-support'],
        files: ['./src/**/*.ts'],
        preprocessors: {
            './src/**/*spec.ts': ['webpack'], 
            './src/**/!(*.spec).ts': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['.js', '.ts', '.tsx']
            },
            module: {
                loaders: [
                    {test: /\.ts$/,
                    loader: ['istanbul-instrumenter-loader'],
                    exclude: [
                        'node_modules',
                        /\.spec\.ts$/
                    ]},
                    {test: /\.ts?$/, loader: 'ts-loader'}
                ]
            },
            stats: {
                colors: true,
                modules: true,
                reasons: true,
                errorDetails: true
            },
            devtool: 'inline-source-map',
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            reporters: [
              {
                type: 'json',
                dir: 'coverage/json',
                subdir: '.'
              }
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}