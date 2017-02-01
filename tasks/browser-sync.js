'use strict';

const config    = require('../config')(),
    sync        = require('browser-sync'),
    ssi         = require('browsersync-ssi'),
    gulp        = require('gulp');

gulp.task('browser-sync', () => {
    sync.init({
        ghostMode: false,
        notify: false,
        server: {
            baseDir: config.sourceDir,
            middleware: ssi({
                ext: '.html',
                baseDir: config.sourceDir
            })
        },
        startPath: '/'
    })
});