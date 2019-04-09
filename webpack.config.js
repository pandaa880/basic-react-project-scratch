const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// config imports

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Project Setup from scratch',
      template: path.resolve(__dirname, 'public/index.html'),
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    quiet: true
  }
}