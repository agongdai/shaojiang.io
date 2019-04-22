const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isProduction = (process.env.NODE_ENV === 'production');

const lessLoader = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      modules: true,
      localIdentName: '[name]--[local]-[hash:base64:5]',
    },
  },
  'less-loader',
  'postcss-loader',
];

if (!isProduction) {
  lessLoader.unshift('css-hot-loader');
}

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/, // Check for all js files
      include: path.join(__dirname, '..', 'src'),
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: true,
          },
        },
      ],
    },
    {
      test: /\.html$/,
      include: path.join(__dirname, '..', 'src', 'tmpl'),
      use: ['html-loader'],
    },
    {
      test: /\.css$/,
      include: path.join(__dirname, '..', 'node_modules'),
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.less$/,
      include: path.join(__dirname, '..', 'src'),
      exclude: path.join(__dirname, '..', 'src', 'styles'),
      use: lessLoader,
    },
    {
      test: /\.less$/,
      include: path.join(__dirname, '..', 'src', 'styles'),
      use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
    },
    {
      type: 'javascript/auto',
      test: /\.(html)/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      }],
    },
    {
      test: /\.(png|jpg|gif)(.*)$/,
      use: 'file-loader',
    },
    {
      test: /\.svg(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]',
    },
    {
      test: /\.woff(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]',
    },
    {
      test: /\.woff2(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]',
    },
    {
      test: /\.[ot]tf(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]',
    },
    {
      test: /\.eot(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]',
    },
  ],
};
