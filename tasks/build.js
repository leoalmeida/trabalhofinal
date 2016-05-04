var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var mainBowerFiles = require('main-bower-files');
var Builder = require('systemjs-builder');

/* Prepare build using SystemJS Builder */
gulp.task('build', function (done) {
    runSequence('build-sjs', done);
});

gulp.task('build-sjs', function (done) {
    runSequence('build-assets', buildSJS);
    function buildSJS () {
        var builder = new Builder();
        builder.loadConfig('./systemjs.conf.js')
        .then(function() {
            return builder
                .bundle(config.app + 'main',
                        config.build.path + config.app + 'main.js', 
                config.systemJs.builder);
        })
        .then(function() {
            console.log('Build complete');
            done();
        })
        .catch(function (ex) {
            console.log('error', ex);
            done('Build failed.');
        });
    }
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', function (done) {
    runSequence('clean-build', ['wiredep', 'fonts'], function () {
        done();

        gulp.src(config.app + '**/*.html', {
            base: config.app
        })
        .pipe(gulp.dest(config.build.app));

        gulp.src(config.app + '**/*.css', {
            base: config.app
        })
        .pipe(cssnano())
        .pipe(gulp.dest(config.build.app));

        gulp.src(config.assetsPath.images + '**/*.*', {
            base: config.assetsPath.images
        })
        .pipe(gulp.dest(config.build.assetPath + 'images'));

        return gulp.src(config.index)
            .pipe(useref())
            .pipe(gulpif('*.js', uglify()))
            .pipe(gulpif('*.css', cssnano()))
            .pipe(gulpif('!*.html', rev()))
            .pipe(revReplace())
            .pipe(gulp.dest(config.build.path));
    });
});

/* Copy fonts in bower */
gulp.task('fonts', function () {
    gulp.src(config.assetsPath.fonts + '**/*.*', {
        base: config.assetsPath.fonts
    })
    .pipe(gulp.dest(config.build.fonts));

    gulp.src(mainBowerFiles({
        filter: '**/fonts/*.*'
    }))
    .pipe(gulp.dest(config.build.fonts));
});

/* Wiredep the bower main files to index file */
gulp.task('wiredep', ['sass'], function () {
    return gulp.src(config.index)
        .pipe(inject(gulp.src(mainBowerFiles(), {
            read: false
        }), {
            name: 'bower'
        }))
        .pipe(inject(
            gulp.src(config.assetsPath.styles + 'main.css', {
                read: false
            })
        , {
            name: 'app'
        }))
        .pipe(gulp.dest(config.root));
});