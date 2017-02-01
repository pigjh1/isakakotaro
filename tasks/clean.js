'use strict';

const config    = require('../config')(),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

gulp.task('clean', () => {
    gulp.src(config.distDir, { read: false })
        .pipe($.clean({ force: true }))
});