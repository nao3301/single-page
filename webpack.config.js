const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};
const PROD = process.env.NODE_ENV === 'production';
console.log(
  'webpackXXXXXXXXXXXXXXXXXXXXXXXXXXXX' +
    PROD +
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' +
    process.env.NODE_ENV
);

module.exports = {
  devtool: PROD ? 'source-map' : 'eval-source-map',
  entry: PROD
    ? './app/index.js'
    : [
        'webpack-hot-middleware/client?reload=true', // reloads the page if hot module reloading fails.
        './app/index.js'
      ],
  target: 'web',
  output: {
    path: PROD ? __dirname + '/build' : __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PROD ? './build' : './app'
  },
  plugins: PROD
    ? [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
      ]
    : [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: PROD
          ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: { minimize: true, sourceMap: true }
                }
              ]
            })
          : ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: PROD
          ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: { minimize: true, sourceMap: true }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true,
                    plugins: function() {
                      return [autoprefixer];
                    }
                  }
                },
                { loader: 'sass-loader',
                 options: { sourceMap: true } }
              ]
            })
          : [
              {
                loader: 'style-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: function() {
                    return [autoprefixer];
                  }
                }
              },
              { loader: 'sass-loader',
               options: { sourceMap: true } }
            ]
        // ExtractTextPlugin.extract('style', 'css?sourceMap!resolve-url!sass?sourceMap') :
        // 'style!css?sourceMap!resolve-url!sass?sourceMap'
      },
      { test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url-loader' },
      { test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/, loader: 'url-loader' }
    ]
  }
};
