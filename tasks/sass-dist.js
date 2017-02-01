'use strict';

const config    = require('../config')(),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

gulp.task('sass-dist', () => {
    gulp.src(config.sourceDir + '/static/scss/*.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sourcemaps.write())
        .pipe($.cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(config.distDir + '/static/css'))
});