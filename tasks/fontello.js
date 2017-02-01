'use strict';

const config    = require('../config')(),
    fs          = require('fs'),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')();

let fontelloDir     = '';

fs.readdirSync(config.refDir).forEach(function(item) {
    if(/fontello-[a-f\d]{8}/.test(item)) {
        fontelloDir = item;
        return false;
    }
});

gulp.task('fontello', () => {
    gulp.src(config.refDir + '/' + fontelloDir + '/css/fontello.css')
        .pipe($.replace(/\.\.\/font/g, '../fonts')) // correct font path
        .pipe($.replace('margin-', '// margin-')) // remove margin style
        .pipe($.rename('_fontello.scss'))
        .pipe(gulp.dest(config.sourceDir + '/static/scss/vendors'))
});