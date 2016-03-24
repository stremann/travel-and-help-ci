const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, '/src/client'),

    entry: {
        app: './app'
    },

    output: {
        path: path.join(__dirname, '/www/js'),
        filename: '[name].min.js',
        library: ['epam', '[name]'],
        libraryTarget: 'umd'
    },

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: 'inline-source-map',

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, '/src/client'),
            loader: 'babel'
        }]
    }
};