var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
console.log(path.join(__dirname, 'src/frontend', 'index.html'));

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, 'src/lib/', 'app.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Car Trawler Test',
            template: path.resolve('./src/index.html'),//'html-loader!src/index.html',
            filename: 'index.html',
            hash: true
        }), 
        new ModernizrWebpackPlugin(), 
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.html', '.js', '.css']
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /nodule_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                include: /lib/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            }
        ]
    }
};