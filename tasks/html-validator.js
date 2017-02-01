'use strict';

const config    = require('../config')(),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

gulp.task('html-validator', () => {
    gulp.src([
        'src/*.html',
        '!' + 'src/_*.html'
    ])
        .pipe($.w3cjs())
});