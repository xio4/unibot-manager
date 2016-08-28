const fs = require('fs');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common');
const path = require('path');
const _ = require('lodash');

const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const outputPath = path.resolve(commonConfig.context, 'build', 'assets');

const prodConfig = {
    entry: {
        vendor: ['bootstrap-loader?extractStyles']
    },
    output: {
        path: outputPath,
        publicPath: '/assets/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        jsonpFunction: 'jpf'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        }),
        new AssetsPlugin({
            filename: 'webpack.assets.json'
        }),
        new CleanWebpackPlugin(['build'], { root: commonConfig.context }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
//        new CompressionPlugin({
//            asset: '[path].gz[query]',
//            algorithm: 'gzip',
//            test: /\.js$|\.css$|\.jpg$|\.png$|\.gif$|\.svg$|\.eot$|\.ttf$|\.woff$/,
//            minRation: 1.0
//        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: function() {
                return false;
            },
            sourceMap: false,
            warnings: false,
            minimize: true,
            compress: true,
            mangle: true,
            beautify: false
        }),
        new HtmlWebpackPlugin({
            filename: path.join(commonConfig.context, 'build', 'index.html'),
            title: commonConfig.headTitle,
            template: '!!ejs!templates/index.tpl'
        })
    ]
};

module.exports = webpackMerge.smart(commonConfig, prodConfig);
