const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
    {
        from: resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
        to: 'main',
        flatten: true,
    },
    {
        from: resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
        to: 'main',
        flatten: true,
    },
    {
        from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
        to: 'main',
        flatten: true,
    },
];

const assets = [
    {
        from: 'src/img',
        to: 'img/',
    },
];

const plugins = [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        minify: {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
        },
    }),
    new CopyWebpackPlugin([...polyfills, ...assets]),
    new webpack.HotModuleReplacementPlugin(),
];

module.exports = ({ mode, presets }) => {
    return {
        mode,
        output: {
            filename: '[name].js',
        },
        devServer: {
            hot: true,
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.lit$/,
                    loader: ['babel-loader', 'lit-loader'],
                },
            ],
        },
        plugins,
    };
};
