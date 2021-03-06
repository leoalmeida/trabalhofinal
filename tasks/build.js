var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');


require('ngstarter-systemjs-tasks');


/* Prepare build using SystemJS Builder */
gulp.task('build', function (done) {
    runSequence('build-systemjs', 'build-assets', done);
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', function (done) {
    runSequence('clean-build', ['sass', 'fonts', 'others'], function () {

        gulp.src(config.app + '**/*.html', {
            base: config.app
        })
            .pipe(gulp.dest(config.build.app));

        gulp.src(config.app + '**/*.css', {
            base: config.app
        })
            .pipe(cssnano())
            .pipe(gulp.dest(config.build.app));

        gulp.src(config.src + 'favicon.ico')
            .pipe(gulp.dest(config.build.path));

        gulp.src(config.assetsPath.imagens + '**/*.*', {
            base: config.assetsPath.imagens
        })
            .pipe(gulp.dest(config.build.assetPath + 'imagens'));


        gulp.src(config.index)
            .pipe(useref())
            .pipe(gulpif('assets/lib.js', uglify()))
            .pipe(gulpif('*.css', cssnano()))
            .pipe(gulpif('!*.html', rev()))
            .pipe(revReplace())
            .pipe(gulp.dest(config.build.path))
            .on('finish', done);

    });
});


/* Copy fonts in packages */
gulp.task('fonts', function () {
    gulp.src(config.assetsPath.fonts + '**/*.*', {
        base: config.assetsPath.fonts
    })
        .pipe(gulp.dest(config.build.fonts));

    gulp.src([
        'node_modules/font-awesome/fonts/*.*'
    ])
        .pipe(gulp.dest(config.build.fonts));
});


gulp.task('others', function () {
    gulp.src(config.assetsPath.images + '**/*.*', {
            base: config.assetsPath.images})
        .pipe(gulp.dest(config.build.images));

    gulp.src(config.assetsPath.imgHD + '**/*.*', {
            base: config.assetsPath.imgHD})
        .pipe(gulp.dest(config.build.imgHD));

    gulp.src(config.src + 'favicon.ico', {
        base: config.src})
        .pipe(gulp.dest(config.build.path));

    gulp.src(config.app + '**/*.json', {
        base: config.app
    }).pipe(gulp.dest(config.build.app));
});