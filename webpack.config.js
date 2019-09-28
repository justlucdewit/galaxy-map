const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'
const dev = mode === 'development'

const sourceFolder = resolve(__dirname, 'src')
const buildFolder = resolve(__dirname, 'dist')

module.exports = {
    mode,
    entry: resolve(sourceFolder, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: buildFolder,
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/i,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: !dev }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(sourceFolder, 'index.html'),
            publicPath: '/',
            filename: 'index.html',
            path: resolve(__dirname, 'dist')
        })
    ],
    devServer: {
        hot: true,
        publicPath: '/'
    }
}
