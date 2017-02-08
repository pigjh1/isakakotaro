'use strict';

const path      = require('path'),
    webpack     = require('webpack');

var _dir = './src/static/js';

module.exports = {
    context: path.join(__dirname, _dir),
     // 진입 파일
    entry: {
        common: './common.dev.js',
    },
    // 출력 파일
    output: {
        path: path.join(__dirname, _dir),
        publicPath: path.join(__dirname, _dir),
        filename: 'common.js'
    },
    // webpack 모듈 로더 설정
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|lib)/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ]
    },
    // Options
    resolve: {
        modulesDirectories: [_dir,'node_modules'],
        alias: {
            'jquery': 'lib/jquery-1.11.2.min',
            'd3': 'lib/d3.v3.min'
        },
        extension: ['', '.js', '.json']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    // devtool: 'eval',
    watch: true
}