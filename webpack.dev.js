const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["./src"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    //publicPath: "", // without /, kept getting 404 errors when refreshing with redux-form
    // with /, running `npm run build` would not find bundle or any other file
  },
  mode: "development",
  //  optimization: {
  //    splitChunks: {
  //      chunks: "all",
  //    },
  //  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "0.0.0.0", // added for nginx & docker configs
    port: 3000,
    hot: true,
    historyApiFallback: true, // use for routing
    overlay: true,
    writeToDisk: true,
    //public: "devconfig:80", // change devconfig if needed to whatever app is named (e.g. client:80), added with nginx use
    //proxy: [{ context: ["/auth/google", "/api"], target: "http://localhost:5000" }] <--- use if working with backend, paths are just examples.
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [
      ".js",
      ".jsx",
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
        exclude: /node_modules/,
        use: "babel-loader",
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
        use: "html-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff(2)?|eot|mp4|webm)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          "image-webpack-loader",
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
    new CleanWebpackPlugin(),
  ],
};
