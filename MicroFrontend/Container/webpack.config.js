const HtmlWebpackPlugin = require ('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')


module.exports = {
   
    devServer: {
        port: 8080
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
            name: 'ContainerMFE', 
            filename: 'remoteEntry.js', 
            remotes: {
                ReactMFE1: 'ReactMFE1@http://localhost:8081/remoteEntry.js',
                ReactMFE2: 'ReactMFE2@http://localhost:8082/remoteEntry.js'
            }
        })
    ]
}