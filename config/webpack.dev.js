const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["./src/index.ts", "./src/main.scss"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "",
  },
  mode: "development",
  devtool: "eval",
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    overlay: true,
    writeToDisk: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      public_html$: path.resolve(
        __dirname,
        "../public/index.html",
      ),
    },
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".css",
      ".scss",
      ".jpg",
      ".jpeg",
      ".png",
      ".svg",
      ".gif",
      ".ttf",
      ".woff",
      ".woff2",
      ".eot",
      "mp4",
      "webm",
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff(2)?|eot|mp4|webm)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kBs
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/lastname-32x32.png",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
