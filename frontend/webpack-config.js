const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
    },

    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: "/dist/",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 3000,
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin({
            template: path.join(__dirname + "/dist/index.html"),
            inject: 'body'
        })
    ]
};