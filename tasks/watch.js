'use strict';

const config    = require('../config')(),
    sync        = require('browser-sync'),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

gulp.task('watch', () => {
    gulp.watch(config.html).on('change', sync.reload);
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.js).on('change', sync.reload);
    gulp.watch(config.img).on('change', sync.reload);
});