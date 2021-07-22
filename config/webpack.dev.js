const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  entry: ["./src", "./src/main.scss"],
  output: {
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 3000,
    host: "0.0.0.0", // add for docker
    historyApiFallback: {
      index: "index.html",
    },
    overlay: true,
    writeToDisk: true,
    // public: "post.com" // whatever host name is (e.g. "client:80" or "ticketing.dev")
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(
                  __dirname,
                  "postcss.config.js",
                ),
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/lastname-32x32.png",
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
});
