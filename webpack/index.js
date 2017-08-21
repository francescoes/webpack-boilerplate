const HtmlWebpackPlugin = require('html-webpack-plugin');
const requireDir = require('require-dir');
const { join, resolve } = require('path');

const { babel, scss, html, fonts } = requireDir('./loaders');
const HOME = resolve(__dirname, '../');

module.exports = {
  entry: join(HOME, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: join(HOME, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    template: join(HOME, 'src', 'index.html')
  })],
  devServer: {
    contentBase: join(HOME, 'dist'),
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
