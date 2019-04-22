const webpack = require('webpack');
const basePlugins = require('./webpack.plugins.base.js');

module.exports = [
  ...basePlugins,
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  /*
   "Webpack, by default, assigns modules integer ids, based on order.
   So when modules are changed, all ids could change, invalidating the cache."
   */
  new webpack.NamedModulesPlugin(),
];
