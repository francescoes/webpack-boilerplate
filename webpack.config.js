const HtmlWebpackPlugin = require('html-webpack-plugin');
const requireDir = require('require-dir');
const { join } = require('path');

const { babel, scss, html, fonts } = requireDir('./webpack-rules');

module.exports = {
  entry: join(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    template: join(__dirname, 'src', 'index.html')
  })],
  devServer: {
    contentBase: join(__dirname, 'dist'),
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
