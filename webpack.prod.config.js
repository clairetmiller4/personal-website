const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  BUILD: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'src')
};

module.exports = {
  devtool: 'source-map',

  entry: path.join(paths.SRC, 'index.jsx'),

  output: {
    path: paths.BUILD,
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new ExtractTextPlugin('styles/bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};
