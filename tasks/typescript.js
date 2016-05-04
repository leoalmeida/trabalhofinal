var gulp = require('gulp');
var config = require('../gulp.config')();
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

/* Initialize TS Project */
var typingFiles = [
    'typings/browser.d.ts',
    'node_modules/angular2/typings/browser.d.ts'
];

/* Lint typescripts */

function compileTs(files, watchMode) {
    watchMode = watchMode || false;
    var tsProject = ts.createProject(config.root + 'tsconfig.json');
    var allFiles = [].concat(files, typingFiles);
    var res = gulp.src(allFiles, {
            base: '.'
        })
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .on('error', function () {
            process.exit(1);
        });
    return res.js
        .pipe(sourcemaps.write('.', {
              // Return relative source map root directories per file.
              includeContent: false,
              sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
              }
            }))
        .pipe(gulp.dest(config.root));
}