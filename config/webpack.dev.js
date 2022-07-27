<<<<<<< HEAD
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  entry: ['./src'],
  output: {
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    client: {
      overlay: true,
      progress: true,
      webSocketTransport: 'ws',
    },
    hot: true,
    port: 3000,
    host: '0.0.0.0', // add for docker
    historyApiFallback: true,
=======
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: ["./src/index.ts"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  mode: "development",
  devtool: "eval",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
>>>>>>> db7c085d1b44b6c04e3bd6be71394e929d01d332
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
<<<<<<< HEAD
    // public: "post.com" // whatever host name is (e.g. "client:80" or "ticketing.dev")
=======
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: "tsconfig.json",
      }),
    ],
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
>>>>>>> db7c085d1b44b6c04e3bd6be71394e929d01d332
  },
  module: {
    rules: [
      {
<<<<<<< HEAD
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(
                  __dirname,
                  'postcss.config.js',
                ),
              },
            },
          },
          'sass-loader',
        ],
      },
=======
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
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
>>>>>>> db7c085d1b44b6c04e3bd6be71394e929d01d332
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
<<<<<<< HEAD
      template: './public/index.html',
      favicon: './public/lastname-32x32.png',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
});
=======
      template: "./public/index.html",
      favicon: "./public/lastname-32x32.png",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new StylelintPlugin(),
  ],
};
>>>>>>> db7c085d1b44b6c04e3bd6be71394e929d01d332
