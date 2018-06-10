/**
 * Build HTML
 */
const gulp = require('gulp');
const { reload } = require('browser-sync');
const fileinclude = require('gulp-file-include');
const notify = require('gulp-notify');
const path = require('path');
const plumber = require('gulp-plumber');

const config = require('./config');

gulp.task('htmlbook', () =>
  gulp
    .src(path.join(config.root.dev, config.htmlbook.dev, './*.html'))
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: path.join(
        config.root.dev,
        config.htmlbook.parts,
      ),
    }))
    .pipe(gulp.dest(path.join(config.root.dist, config.htmlbook.dist)))
    .pipe(reload({ stream: true })));
