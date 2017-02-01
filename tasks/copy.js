'use strict';

const config    = require('../config')(),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

gulp.task('copy', () => {
    gulp.src([
        config.sourceDir + '/**',
        '!' + config.sourceDir + '/_dev/*',
        '!' + config.sourceDir + '/_*.html',
        '!' + config.sourceDir + '/static/scss{,/**}',
        '!' + config.sourceDir + '/static/js{,/**}'
    ])
        .pipe($.copy(config.distDir, { prefix: 1 }));
});