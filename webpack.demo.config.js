const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATH_ROOT = path.resolve(__dirname, './demo')
const PATH_SRC = path.resolve(PATH_ROOT, 'src/')
const PATH_OUT = path.resolve(PATH_ROOT, 'dist/')
const devMode = process.env.NODE_ENV !== "production";



module.exports = {
    mode: 'production',
    entry: [
        path.resolve(PATH_SRC, 'index.js')
    ],

    output: {
        path: PATH_OUT,
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.wasm$/,
                type: 'javascript/auto',
                use: ['arraybuffer-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.jpg$|\.gif$|\.png$|\.svg$/,
                use: ['url-loader']
            },
            {
                test: /\.woff$|\.woff2$|\.eot$|\.tff$|\.ttf$/,
                use: 'file-loader?publicPath=../&name=./assets/fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: "'production'"
            },
            __DEVELOPMENT__: false
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'React-18-Mic',
            filename: `${PATH_OUT}/index.html`,
            template: `${PATH_SRC}/index.html`,
        }),
    ]
}
