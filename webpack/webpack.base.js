const HtmlWebpackPlugin = require('html-webpack-plugin');
const requireDir = require('require-dir');
const { join, resolve } = require('path');

const { babel, scss, html, fonts } = requireDir('./loaders');
const root = resolve(__dirname, '../');

module.exports = {
  config: {
    entry: join(root, 'index.js'),
    output: {
      filename: 'app.js',
      path: join(root, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
      template: join(root, 'src', 'index.html')
    })],
    module: {
      rules: [
        babel,
        scss,
        html,
        fonts
      ]
    }
  },
  root
};
