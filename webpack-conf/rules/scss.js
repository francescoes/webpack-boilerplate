module.exports = {
  test: /\.scss$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader'
  }, {
    loader: 'resolve-url-loader'
  }, {
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
  }]
};
