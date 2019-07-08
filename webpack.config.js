const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './frontend/index.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react'],
                }
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    }
};
