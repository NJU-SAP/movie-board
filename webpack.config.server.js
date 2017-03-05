const fs = require('fs')
const path = require('path')

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'lib/index.js')],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
    ]
  }
}
