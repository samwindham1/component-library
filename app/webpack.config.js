const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    target: 'web',
    node: {
        __dirname: true
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js'
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        sourceType: 'unambiguous'
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            // Fix duplicate react installs
            react: path.resolve('./node_modules/react')
        }
    }
};
