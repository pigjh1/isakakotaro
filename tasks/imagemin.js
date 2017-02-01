'use strict';

const config    = require('../config')(),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

gulp.task('imagemin', () => {
    gulp.src(config.img)
        .pipe($.imagemin())
        .pipe(gulp.dest('dist/static/images/'))
});