import * as path from "path";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");

export default {
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "&components": path.resolve(
        __dirname,
        "../src/components",
      ),
      "&hooks": path.resolve(__dirname, "../src/hooks"),
      "&images": path.resolve(__dirname, "../src/images"),
      "&sass": path.resolve(__dirname, "../src/sass"),
      "&src": path.resolve(__dirname, "../src"),
      "&state": path.resolve(__dirname, "../src/state"),
      __tests__: path.resolve(__dirname, "../src/__tests__"),
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
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
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
      favicon: "./public/favicon-32x32.png",
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
    }),
    new CleanWebpackPlugin(),
    //    new CopyWebpackPlugin({
    //      patterns: [
    //        {
    //          from: "public",
    //        },
    //      ],
    //    }),
  ],
};
