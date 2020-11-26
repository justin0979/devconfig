const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  output: {
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: "index.html",
    }, // use for routing
    overlay: true,
    writeToDisk: true,
    //public: "devconfig:80", // change devconfig if needed to whatever app is named (e.g. client:80), added with nginx use
    //proxy: [{ context: ["/auth/google", "/api"], target: "http://localhost:5000" }] <--- use if working with backend, paths are just examples.
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon-32x32.png",
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
});
