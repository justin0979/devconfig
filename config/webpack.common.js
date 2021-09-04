const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
// const CopyWebpackPlugin = requier("copy-webpack-plugin");

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
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
      '.mp4',
      '.webm',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new StylelintPlugin(),
    //    new CopyWebpackPlugin({
    //      patterns: [
    //        {
    //          from: "public",
    //        },
    //      ],
    //    }),
  ],
};
