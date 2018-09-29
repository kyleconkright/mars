import * as webpack from 'webpack'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env: any): webpack.Configuration => {
    console.log(env);
    return {
        mode: env,
        entry: './src/app/app.ts',
        output: {
            path: path.resolve(__dirname + './../dist/assets'),
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
        },
        module: {
            rules: [
                { test: /\.s?css?$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
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
