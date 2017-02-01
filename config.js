module.exports = function() {
    var sourceDir   = 'src',
        distDir  = 'dist',
        refDir   = '_ref',
        buildDir = 'build',
        
        html = [
            sourceDir + '/*.html',
            sourceDir + '/**/*.html'
        ],
        sass = [
            sourceDir + '/static/scss/*.scss',
            sourceDir + '/static/scss/**/*.scss'
        ],
        js = [
            sourceDir + '/static/js/common.js'
        ],
        img = [
            sourceDir + '/static/images/*',
            sourceDir + '/static/images/**/*'
        ];

    return {
        sourceDir  : sourceDir,
        distDir : distDir,
        refDir : refDir,
        buildDir : buildDir,
        html : html,
        sass : sass,
        js : js,
        img : img
    };
};