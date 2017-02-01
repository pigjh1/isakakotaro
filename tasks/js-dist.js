'use strict';

const config        = require('../config')(),
    gulp            = require('gulp'),
    $               = require('gulp-load-plugins')();

gulp.task('js-dist', () => {
    gulp.src(config.js)
        .pipe($.sourcemaps.init())
        .pipe($.stripDebug())           // remove console
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.distDir + '/static/js/'))
});