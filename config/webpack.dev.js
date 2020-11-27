const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  entry: ["./src/index"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    //  publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: "index.html",
    },
    overlay: true,
    writeToDisk: true,
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
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
});
