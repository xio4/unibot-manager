const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./config/dev');
const env = require('./config/env');

const app = express();
const compiler = webpack(config);
const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    quiet: false,
    noInfo: true,
    stats: {
        colors: true,
        timings: true,
        chunks: true,
        errors: true,
        errorDetails: true,
        warnings: true
    }
});

app.use(webpackDevMiddlewareInstance);

app.use(express.static(config.context));

app.use((req, res, next) => {
    res.send(webpackDevMiddlewareInstance.fileSystem.readFileSync(path.resolve(config.output.path, 'index.html')).toString('utf-8'));
});

app.listen(env.port, env.host, err => err && console.log(err));
