const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ENV = process.env.NODE_ENV

const baseConfig = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    main: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './src',
    publicPath: '/output'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.js$/,
        use: { 
          loader: 'babel-loader',
          options: { presets: ['react', 'es2016'] }
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin(),
    /* specifies environment */
    new webpack.DefinePlugin({ 
      'process.env.NODE_ENV': JSON.stringify(ENV)
    })
  ]
}

if (ENV === 'production') {
  baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = baseConfig




/*
output: {
    filename: '[name].js',
    path: path.resolve('./build')
  }
*/