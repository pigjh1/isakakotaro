'use strict';

const config    = require('../config')(),
    gulp        = require('gulp'),
    webpack     = require('webpack-stream');

gulp.task('webpack', () => {
    gulp.src(config.sourceDir + '/static/js')
        .pipe(webpack( require('../webpack.config.js') ))
        .pipe(gulp.dest(config.sourceDir + '/static/js'))
});