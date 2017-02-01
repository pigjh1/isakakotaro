'use strict';

const gulp      = require('gulp');

require('require-dir')('./tasks');

// 기본 실행
gulp.task('default', [
    'browser-sync', 
    'webpack', 
    'watch', 
    'sass'
]);

// fontello icon 생성
gulp.task('icon', [
    'fontello'
]);

// 최종 배포
gulp.task('dist', [
    'clean',
    'copy',
    'html-ssi',
    'html-validator',
    'imagemin',
    'sass-dist',
    'js-dist'
]);