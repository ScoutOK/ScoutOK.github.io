'use strict';

const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015']
              }
            }
        ]
    }
};