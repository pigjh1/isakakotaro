'use strict';

const config    = require('../config')(),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

gulp.task('html-ssi', () => {
    gulp.src(['src/**/*.html'])
        .pipe($.htmlSsi())
        .pipe(gulp.dest(config.distDir))
});