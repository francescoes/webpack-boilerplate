const { join, } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const DEVELOPMENT = argv.mode === 'development';

  return {
    devtool: DEVELOPMENT ? 'cheap-eval-source-map' : false,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader',],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    devServer: {
      contentBase: join(__dirname, 'dist'),
    },
  };
};
