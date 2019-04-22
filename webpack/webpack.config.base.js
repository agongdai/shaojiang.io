const path = require('path');
const fs = require('fs');
const webpackModule = require('./webpack.module');

const isProduction = (process.env.NODE_ENV === 'production');

console.log(`Compiling to ${path.join(__dirname, '..', 'build')}...`); // eslint-disable-line no-console
console.log('port', process.env.PORT || 3000, __dirname, path.resolve(__dirname, '/..', '/src/components'));

module.exports = {
  context: path.join(__dirname, '..', 'src'),
  entry: [
    'react-hot-loader/patch',
    './index.jsx',
  ],
  mode: isProduction ? 'production' : 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      maxAsyncRequests: 10,
      cacheGroups: {
        vendorsReact: {
          test: /[\\/]node_modules[\\/](react|react-dom|prop-types|react-router|react-router-dom)[\\/]/,
          name: 'vendors-react',
        },
        vendorsReactUtils: {
          test: /[\\/]node_modules[\\/](react-ga|react-helmet-async|react-hot-loader|react-hotkeys|react-i18next|react-toastify)[\\/]/,
          name: 'vendors-react-utils',
        },
        vendorsRedux: {
          test: /[\\/]node_modules[\\/](react-redux|redux|redux-form|redux-localstorage|redux-logger|redux-thunk|react-router-redux)[\\/]/,
          name: 'vendors-redux',
        },
        vendorsUtils1: {
          test: /[\\/]node_modules[\\/](lodash|moment)[\\/]/,
          name: 'vendors-utils-1',
        },
        vendorsUtils2: {
          test: /[\\/]node_modules[\\/](axios|history|i18next|i18next-browser-languagedetector|classnames|validator|js-base64|dotenv-webpack)[\\/]/,
          name: 'vendors-utils-2',
        },
        vendorsMaterialUI: {
          test: /[\\/]node_modules[\\/](@material-ui\/core|@material-ui\/icons)[\\/]/,
          name: 'vendors-material-ui',
        },
        vendorsFontAwesome: {
          test: /[\\/]node_modules[\\/](@fortawesome\/fontawesome-pro|@fortawesome\/fontawesome-svg-core|@fortawesome\/free-brands-svg-icons|@fortawesome\/free-solid-svg-icons|@fortawesome\/pro-light-svg-icons|@fortawesome\/pro-regular-svg-icons|@fortawesome\/pro-solid-svg-icons|@fortawesome\/react-fontawesome)[\\/]/,
          name: 'vendors-fontawesome',
        },
        vendorsAws: {
          test: /[\\/]node_modules[\\/](aws-amplify|aws-amplify-react|aws-sdk)[\\/]/,
          name: 'vendors-aws',
        },
        vendorsOthers: {
          test: /[\\/]node_modules[\\/](!react)(!react-dom)(!prop-types)(!react-router)(!react-router-dom)(!react-ga)(!react-helmet-async)(!react-hot-loader)(!react-hotkeys)(!react-i18next)(!react-toastify)(!react-redux)(!redux)(!redux-form)(!redux-localstorage)(!redux-logger)(!redux-thunk)(!react-router-redux)(!lodash)(!moment)(!axios)(!history)(!i18next)(!i18next-browser-languagedetector)(!classnames)(!validator)(!js-base64)(!dotenv-webpack)(!@material-ui\/core)(!@material-ui\/icons)(!@fortawesome\/fontawesome-pro)(!@fortawesome\/fontawesome-svg-core)(!@fortawesome\/free-brands-svg-icons)(!@fortawesome\/free-solid-svg-icons)(!@fortawesome\/pro-light-svg-icons)(!@fortawesome\/pro-regular-svg-icons)(!@fortawesome\/pro-solid-svg-icons)(!@fortawesome\/react-fontawesome)(!aws-amplify)(!aws-amplify-react)(!aws-sdk)[\\/]/,
          name: 'vendors-others',
        },
      },
    },
    minimize: isProduction,
  },
  output: {
    filename: (isProduction) ? '[name].[chunkhash].js' : '[name].[hash].js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/',
  },
  module: webpackModule,
  devServer: {
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.cert'),
      spdy: { // @see https://github.com/webpack/webpack-dev-server/issues/1491
        protocols: ['http/1.1'],
      },
    },
    contentBase: path.join(__dirname, '..', '/'),
    clientLogLevel: 'info',
    port: typeof process.env.PORT === 'undefined' ? 3000 : process.env.PORT,
    hot: !isProduction,
    hotOnly: !isProduction,
    compress: isProduction,
    inline: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    disableHostCheck: true,
  },
};
