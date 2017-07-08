module.exports = {
  test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
  use: [{
    loader: 'file-loader'
  }]
};
