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

gulp.task('iconlist', () => {
    gulp.src(config.refDir + '/' + fontelloDir + '/css/fontello.css')
        .pipe($.replace(
            /\.icon-([^:]+):before { content: ('\\[a-f\d]+'); }/g,
            '@include icon-add-list(\'$1\', $2);'
        )) // add mixin from style
        .pipe($.replace(/@font-face[^>]*}(.*?)/g, '')) // remove font style
        .pipe($.rename('_icon-list.scss'))
        .pipe(gulp.dest(config.sourceDir + '/static/scss/utils'))
});