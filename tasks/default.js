/**
 * Default Tasks
 */
const gulp = require('gulp');
const runSequence = require('run-sequence');

const mode = require('./lib/mode');
const config = require('./config');

const assets = ['img', 'fonts', 'static'];

/**
 * Enable/Disable html build using config
 * Usually when we use proxy this task became unused
 */
if (config.html.run) {
  assets.push('html');
}

if (config.htmlbook.run) {
  assets.push('htmlbook');
}

gulp.task('default', (cb) => {
  mode.development
    ? runSequence('clean', assets, ['css', 'js'], 'size', cb)
    : runSequence(assets, 'css', 'watch', cb);
});
