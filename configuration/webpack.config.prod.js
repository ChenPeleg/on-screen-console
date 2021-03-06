const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    mode: "production",
    entry: "../src/app.ts",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'

    },
    devtool: "eval-cheap-module-source-map",
    
    plugins: [
        new CleanWebpackPlugin(), new HtmlWebpackPlugin({
            template: '../src/template.html'
        })
    ],


    // file resolutions
    resolve: {
        extensions: ['.ts', '.js'],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    }
}