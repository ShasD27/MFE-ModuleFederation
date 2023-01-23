const HtmlWebpackPlugin = require ('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')


module.exports = {
    devServer: {
        port: 8081
    }, 
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'ReactMFE1', 
            filename: 'remoteEntry.js', 
            exposes: {
                './Button': './src/Button'
            }
        })
    ]
}