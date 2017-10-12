const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    home:"./src/home/home.js",
    page1:"./src/page1/page1.js"
  },
  output: {
    filename:'[name]_bundle.js',
    path: path.resolve('build'),
    publicPath: '/assets/'
  },
  devServer: {
    contentBase: 'public'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons_bundle.js"
    }),
    new ExtractTextPlugin({
        filename:'[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
      },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }
    ]
  }
};
