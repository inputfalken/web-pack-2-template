const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: __dirname,
    publicPath: '/dist/',
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
