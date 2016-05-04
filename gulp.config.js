module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var assets = root + 'assets/';
    var assetsPath = {
        styles: assets + 'styles/',
        images: assets + 'images/',
        fonts: assets + 'fonts/'
    };
    var index = root + 'index.html';
    var build = {
        path: 'build/',
        app: 'build/app/',
        fonts: 'build/fonts',
        assetPath: 'build/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var liveServer = {
        dev: {
            port: 3000,
            host: "127.0.0.1",
            open: '/',
            file: "index.html",
            wait: 1000,
            logLevel: 0
        },
        prod: {
            port: 3001,
            host: "127.0.0.1",
            root: 'build/',
            file: "index.html",
            wait: 1000,
            logLevel: 0
        }
    };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            globalDefs: { DEBUG: false }
        }
    };

    var config = {
        root: root,
        app: app,
        assets: assets,
        index: index,
        build: build,
        assetsPath: assetsPath,
        liveServer: liveServer,
        systemJs: systemJs
    };

    return config;
};
