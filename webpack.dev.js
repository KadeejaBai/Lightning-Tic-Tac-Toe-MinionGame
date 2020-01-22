const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: '[name].bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, `dist/${pkg.version}`),
  },
  devtool: 'source-map-inline',
  devServer: {
    host: 'localhost',

    // eslint-disable-next-line no-undef
    contentBase: path.join(__dirname, `dist/${pkg.version}`),
    compress: true,
    port: 8055,
    hot: true,
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    global: true,
    crypto: true,
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ttf) (\?v=\d+\.\d+\.\d+)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: `version ${pkg.version}`,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './index.html',
      version: `version ${pkg.version}`,
    }),
    new CopyWebpackPlugin(
      [
        {
          from: 'assets',
          to: 'assets'
        }
      ]
    ),
  ],
};