const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    //devtool: 'inline-source-map',
    
    devServer: {
        static: './dist',
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};