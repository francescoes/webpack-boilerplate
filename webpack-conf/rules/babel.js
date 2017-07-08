module.exports = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      sourceMap: true,
      presets: [
        ['env', {
          'targets': {
            'browsers': ['last 2 versions']
          },
          'debug': true
        }]
      ]
    },
  }
};
