const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    headTitle: 'Unibot-manager',
    context: path.resolve(__dirname, '../../'),
    entry: {
        main: './src/Main.tsx'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.styl'],
        moduleDirectories: ['node_modules']
    },
    module: {
        noParse: /\.min\.js/,
        loaders: [
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: 'file'
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: [
                        'css?minimize=false',
                        'csso?-comments&-restructure',
                        'postcss',
                        'stylus'
                    ].join('!')
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: [
                        'css?minimize=false',
                        'csso?-comments&-restructure',
                        'postcss',
                    ].join('!')
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: [
                        'css?minimize=false',
                        'csso?-comments&-restructure',
                        'postcss',
                        'sass'
                    ].join('!')
                })
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),
        new webpack.BannerPlugin("Copyright(C) 2016 Petr Shalkov")
    ]

};
