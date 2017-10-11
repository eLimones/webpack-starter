const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename:'bundle.js',
    path: path.resolve('build'),
    publicPath: '/assets/'
  },
  devServer: {
    contentBase: 'public'
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
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
