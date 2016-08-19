const webpackMerge = require('webpack-merge');
const commonConfig = require('./common');
const path = require('path');
const env = require('./env');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(commonConfig.context, 'build', 'assets');
const publicPath = `http://${env.host}:${env.port}/assets/`;

const devConfig = {
    entry: {
        vendor: ['bootstrap-loader']
    },
    output: {
        path: outputPath,
        publicPath,
        filename: '[name].js',
        chunkFilename: '[name].js',
        jsonpFunction: 'jpf'
    },
    cache: true,
    debug: true,
    devtool: 'source-map',
    modules: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: path.join(outputPath, 'index.html'),
            title: commonConfig.headTitle,
            template: '!!ejs!templates/index.tpl'
        }),
        new ProgressPlugin(),
        new webpack.NoErrorsPlugin()
    ]


};

module.exports = webpackMerge.smart(commonConfig, devConfig);
