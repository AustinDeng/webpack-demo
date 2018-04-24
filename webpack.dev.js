const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    }
})