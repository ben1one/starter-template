var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('./package.json');
var translation = require('./src/i18n/we.json');
var path = require("path");

//console.log('__dirname:'+ dirname);
//console.log(path.join(__dirname, "dist"));

module.exports = {
    entry: {
        app: "./src/scripts/app.js",
        //vendor: Object.keys(package.dependencies),
        settings: "./src/scripts/settings.js"
    },
    output: {
        filename: "./dist/[name].bundle.js"
    },
    watch: false,
    resolve: { extensions: [".js", ".ts"] },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            translation: translation,
            template: './src/index.html',
            chunks: ['vendor', 'app'],
            filename: './dist/index.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            translation: translation,
            template: './src/index.html',
            chunks: ['vendor', 'settings'],
            filename: './dist/settings.html'
        })
    ]

};