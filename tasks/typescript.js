var gulp = require('gulp');
var config = require('../gulp.config')();
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var argv = require('yargs').argv;

/* Initialize TS Project */
var typingFiles = [
    'typings/index.d.ts'
];

var tsFiles = [].concat(config.tsFiles);

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
    return gulp.watch(tsFiles, function (file) {
        console.log('Compiling ' + file.path + '...');
        return compileTs(file.path, true);
    });
});

/* Compile typescripts */
gulp.task('tsc', ['clean-ts'], function () {
    return compileTs(tsFiles);
});

gulp.task('tsc-app', ['clean-ts-app'], function () {
    return compileTs(config.tsFiles);
});

function compileTs(files, watchMode) {
    var inline = !argv.excludeSource;
    watchMode = watchMode || false;

    var tsProject = ts.createProject('tsconfig.json');
    var allFiles = [].concat(files, typingFiles);
    var res = gulp.src(allFiles, {
        base: config.src,
        outDir: config.tmp
    })
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .on('error', function () {
            if (watchMode) {
                return;
            }
            process.exit(1);
        });
    return res.js
        .pipe(sourcemaps.write('.', {
            includeContent: inline
        }))
        .pipe(gulp.dest(config.tmp));
}