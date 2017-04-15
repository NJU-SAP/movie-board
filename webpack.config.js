const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: './src/vendor/index.js',
    mb: ['./src/mb/index.jsx', './src/mb/res/index.less', './src/mb/index.html']
  },
  output: {
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/chunk.[id].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: false,
    watchOptions: {
      poll: false
    },
    proxy: {
      '/api': {
        target: 'http://api.douban.com/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    stats: {
      // chunks: false,
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'normalize.css': path.resolve(__dirname, './node_modules/normalize.css/normalize.css'),
      'octicons.css': path.resolve(__dirname, './node_modules/octicons/octicons/octicons.css'),
      'react': path.resolve(__dirname, './node_modules/react/dist/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom/dist/react-dom')
    }
  },
  module: {
    noParse: [/react/, /react-dom/],
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.(less|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jpg$/,
        use: ['url-loader?limit=10240']
      },
      {
        test: /\.png$/,
        use: ['url-loader?limit=10240']
      },
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].html',
          'extract-loader',
          'html-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.woff$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
      },
      {
        test: /\.eot$/,
        loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]'
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor'
    }),
    new ExtractTextPlugin('assets/css/[name].css')
  ]
};
