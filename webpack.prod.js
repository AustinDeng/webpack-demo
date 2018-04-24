const merge = require('webpack-merge')
const common = require('./webpack.common')
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports(common, {
    devtool: 'source-map',
    // 使用数组 && 复数
    plugins: [
        new uglifyJSPlugin({
            sourceMap: true
        })
    ],
    
})