import * as webpack from 'webpack'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

import { sassLoaderFunctions } from './utilities';

module.exports = (env: any): webpack.Configuration => {
    console.log(env);

    return {
        mode: env,
        entry: './src/app/app.tsx',
        output: {
            path: path.resolve(__dirname + './../dist/assets'),
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            historyApiFallback: true
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
        },
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader',
                        options: {
                            functions: sassLoaderFunctions
                        }
                    }]
                },
                { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
                { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                        },
                    },
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
            })
        ]
    }
};
