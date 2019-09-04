const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'

const sourceFolder = resolve(__dirname, 'src')
const buildFolder = resolve(__dirname, 'dist')

module.exports = {
    mode,
    entry: resolve(sourceFolder, 'index'),
    output: {
        filename: 'bundle.js',
        path: buildFolder,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(sourceFolder, 'index.html')
        })
    ]
}
