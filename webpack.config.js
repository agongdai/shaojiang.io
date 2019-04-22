const path = require('path');

const config = require('./webpack/webpack.config.base');
const local = require('./webpack/webpack.plugins.local');
const dev = require('./webpack/webpack.plugins.dev');
const production = require('./webpack/webpack.plugins.prod');

const env = process.env.NODE_ENV || 'local';
const isProduction = (env === 'production') || (env === 'dev');
const devtool = isProduction ? false : 'cheap-module-source-map';
const plugins = ({
  local,
  dev,
  production,
})[env];

const locate = folder => path.resolve(__dirname, 'src', folder);

Object.assign(config, {
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      Components: locate('components'),
      Utils: locate('utils'),
      Constants: locate('constants'),
      Elements: locate('elements'),
      Reducers: locate('reducers'),
      Store: locate('store'),
      Partials: locate('partials'),
      Configs: locate('configs'),
      Models: locate('models'),
      I18n: locate('i18n'),
      Styles: path.resolve(__dirname, 'src', 'less'),
    },
  },
  devtool,
  plugins,
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  },
});

module.exports = config;
