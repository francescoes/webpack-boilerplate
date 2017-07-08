const HtmlWebpackPlugin = require('html-webpack-plugin');
const requireDir = require('require-dir');
const { ENTRY, OUTPUT, HTML_TEMPLATE, DIST_PATH } = require('./webpack-conf/costants');
const { babel, scss, html, fonts } = requireDir('./webpack-conf/rules');

module.exports = {
  entry: ENTRY,
  output: {
    filename: OUTPUT.FILENAME,
    path: OUTPUT.PATH
  },
  plugins: [new HtmlWebpackPlugin({
    template: HTML_TEMPLATE
  })],
  devServer: {
    contentBase: DIST_PATH,
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
