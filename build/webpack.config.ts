import * as webpack from 'webpack'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
import { sassFunction } from './utilities';

const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);
const mars = require('./../src/MARS/mars');


module.exports = (env: any): webpack.Configuration => {
    console.log(env);
    console.log(mars);

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
                            functions: {
                                'get($keys)': (keys: any) => {
                                    keys = keys.getValue().split('.');
                                    let result = mars;
                                    let i;
                                    for (i = 0; i < keys.length; i++) {
                                        result = result[keys[i]];
                                    }
                                    result = sassUtils.castToSass(result);
                                    return result;
                                }
                            }
                            
                        }
                    }]
                },
                { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
                { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
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
