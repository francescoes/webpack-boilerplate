const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const requireDir = require('require-dir');

const { babel, scss, html, fonts } = requireDir('./webpack-rules');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'src', 'index.html')
  })],
  devServer: {
    contentBase: path.join(__dirname, 'public', 'dist'),
    compress: true,
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [
      babel,
      scss,
      html,
      fonts
    ]
  }
};
