const merge = require('webpack-merge');
const { join } = require('path');

const { config, root } = require('./webpack.base');

module.exports = merge(config, {
  devServer: {
    contentBase: join(root, 'dist'),
    compress: true
  },
  devtool: 'cheap-module-eval-source-map'
});
