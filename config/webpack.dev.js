const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  entry: ['./src/index'],
  output: {
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    port: 3000,
    // host: "0.0.0.0"  // add for docker use
    hot: true,
    historyApiFallback: true,
    //public: "devconfig:80", // change devconfig if needed to whatever app is named (e.g. client:80), added with nginx use
    //proxy: [{ context: ["/auth/google", "/api"], target: "http://localhost:5000" }] <--- use if working with backend, paths are just examples.
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
});
