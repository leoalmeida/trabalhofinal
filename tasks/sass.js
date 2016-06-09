var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../gulp.config')();
var replace = require('gulp-replace');
var argv = require('yargs').argv;
var fs = require('fs');

gulp.task('sass', function () {
    return gulp.src(config.assetsPath.styles + 'main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.assetsPath.styles));
});

gulp.task('watch-sass', function () {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
});