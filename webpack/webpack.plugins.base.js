const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = [
  new CleanWebpackPlugin([path.join(__dirname, '..', 'build')], { root: process.cwd() }),
  new CopyWebpackPlugin([{
    from: '../public',
    to: 'public',
  }]),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(`${process.env.NODE_ENV}`),
      RUNNING_ENV: JSON.stringify(`${process.env.RUNNING_ENV}`),
    },
  }),
  // Compile index.ejs into index.html, adding styles and scripts with chunkhash value
  new HtmlWebpackPlugin({
    template: 'index.ejs',
  }),
  /*
   To inline the manifest.json file into index.html,
   to save an extra HTTP request for manifest.json
   */
  new InlineManifestWebpackPlugin({
    name: 'webpackManifest',
  }),
  new MiniCssExtractPlugin({
    // Do not use `hash` for development, HMR will be not working
    filename: isProduction ? '[name].[chunkhash].css' : '[name].css',
    chunkFilename: isProduction ? '[id].[chunkhash].css' : '[id].css',
  }),
  new Dotenv(),
];
