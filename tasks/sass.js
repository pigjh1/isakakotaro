'use strict';

const config    = require('../config')(),
    sync        = require('browser-sync'),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

gulp.task('sass', () => {
    gulp.src(config.sourceDir + '/static/scss/*.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.csscomb())
        .pipe(gulp.dest(config.sourceDir + '/static/css'))
        .pipe(sync.stream())
});