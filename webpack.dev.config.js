// Imports: Dependencies
const path = require('path');
require("@babel/register");

// Webpack Configuration
const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.js',
    },
    module: {
        rules : [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    },
    plugins: [],
};
module.exports = config;