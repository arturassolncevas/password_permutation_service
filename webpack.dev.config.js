// Imports: Dependencies
const nodeExternals = require('webpack-node-externals');
const path = require('path');
require("@babel/register");

// Webpack Configuration
const config = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.js',
    },
    module: {
        rules : [
            {
                test: /\.html$/,
                loader: "file-loader",
                options: {
                    name: '[path][name].[ext]',
                }
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    },
    plugins: [],
    target: 'node',
    externals: [nodeExternals()],
};
module.exports = config;