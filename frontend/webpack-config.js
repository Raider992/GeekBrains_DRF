const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "/dist/",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3030,
        publicPath: 'http://localhost:3030/dist/',
        hotOnly: true
    },

    plugins: [new webpack.HotModuleReplacementPlugin()]
};