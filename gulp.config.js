var argv = require('yargs').argv;
var environment = argv.env || 'dev';


if (environment === 'dev') {
    var historyApiFallback = require('connect-history-api-fallback');
}
var connectLogger = require("connect-logger");

module.exports = function () {
    var root = '';
    var src = root + 'src/';
    var app = src + 'app/';
    var test = src + 'test/';
    var tmp = src + 'tmp/';
    var tmpApp = tmp + 'app/';
    var tmpTest = tmp + 'test/';
    var testHelper = test + 'test-helpers/';
    var e2e = test + 'e2e/';
    var tmpE2E = tmpTest + 'e2e/';
    var assets = src + 'assets/';
    var assetsPath = {
        styles: assets + 'styles/',
        images: assets + 'imagens/',
        imgHD: assets + 'imgHD/',
        fonts: assets + 'fonts/'
    };
    var index = src + 'index.html';
    var tsFiles = [
        app + '**/!(*.spec)+(.ts)'
    ];
    var tsTestFiles = {
        unit: [app + '**/*.spec.ts'],
        e2e: [e2e + '**/*.ts'],
        helper: [testHelper + '**/*.ts']
    };
    var build = {
        favicon: 'build/favicon.png',
        path: 'build/',
        app: 'build/app/',
        fonts: 'build/fonts',
        images: 'build/assets/imagens',
        imgHD: 'build/assets/imgHD',
        assetPath: 'build/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var report = {
        path: 'report/'
    };

    if (environment === 'dev') {
        var browserSync = {
            dev: {
                port: process.env.PORT || 5000,
                ui: {
                    port: 3002
                },
                server: {
                    baseDir: './src/',
                    middleware: [connectLogger(), historyApiFallback()],
                    routes: {
                        "/node_modules": "node_modules",
                        "/src": "src"
                    }
                },
                files: [
                    src + "index.html",
                    src + "systemjs.conf.js",
                    src + "assets/styles/main.css",
                    tmpApp + "**/*.js",
                    app + "**/*.css",
                    app + "**/*.html"
                ]
            },
            prod: {
                port: process.env.PORT || 8080,
                ui: {
                    port: 8081
                },
                server: {
                    baseDir: './' + build.path,
                    middleware: [connectLogger(), historyApiFallback()]
                }
            }
        };
    };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: { DEBUG: false, ENV: 'production'  }
        }
    };

    var config = {
        root: root,
        src: src,
        app: app,
        test: test,
        tmp: tmp,
        tmpApp: tmpApp,
        tmpTest: tmpTest,
        tmpE2E: tmpE2E,
        testHelper: testHelper,
        e2e: e2e,
        assets: assets,
        index: index,
        build: build,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        tsTestFiles: tsTestFiles,
        browserSync: browserSync,
        systemJs: systemJs
    };

    if (environment === 'dev')
    {
        config.browserSync = browserSync;
    }
    
    return config;
};