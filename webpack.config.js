const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    }, 
    // 使用数组 && 复数
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: 'Getting Started'
        }),
        new webpack.NamedModulesPlugin,
        new webpack.HotModuleReplacementPlugin
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}