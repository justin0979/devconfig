<<<<<<< HEAD
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  entry: ["./src", "./src/main.scss"],
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "",
  },
  mode: "production",
  devtool: "source-map",
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
=======
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
  },
  mode: 'production',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.css',
      '.scss',
      '.jpg',
      '.jpeg',
      '.png',
      '.svg',
      '.gif',
      '.ttf',
      '.woff',
      '.woff2',
      '.eot',
      'mp4',
      'webm',
    ],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: 'tsconfig.json',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff(2)?|eot|mp4|webm)$/,
        type: 'asset',
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
      template: "./public/index.html",
      favicon: "./public/lastname-32x32.png",
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
  ],
});
=======
      template: './public/index.html',
      favicon: './public/lastname-32x32.png',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ],
};
>>>>>>> db7c085d1b44b6c04e3bd6be71394e929d01d332
