var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js'
    },
    devServer: {
        contentBase: 'dist',
        inline: true,
        port: 8080,
        stats: {
            colors: true
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: extractTextWebpackPlugin.extract('style', 'css', 'less'),
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.less$/,
                loader: extractTextWebpackPlugin.extract('style', 'css', 'less'),
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title: '搭建前端工作流',
            template: './src/index.html'
        }),
        new openBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        }),
        new webpack.BannerPlugin('作者:赵荣\n日期:2016-12-18\n协议:MIT'),
        new extractTextWebpackPlugin('style.css'),
        new uglifyPlugin({
            compress: false
        })
    ]
};

module.exports = config;
