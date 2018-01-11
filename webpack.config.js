const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const ENV = process.env.NODE_ENV

const baseConfig = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    main: './index.js',
    vendor: ['react', 'react-dom'] /* separately bundles vendor code */
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js', /* load script from /build/main.bundle.js */
    /* publicPath: '/build' */
  },
  resolve: {
    extensions: ['.js', '.jsx'] /* order in which to look; for instance, our directory then node_modules */
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.scss/, /* /\.(sass|scss)$/i, */
        use: [ 'style-loader', 'css-loader', 'sass-loader' ] /* load in reverse array order */
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{ 
          loader: 'babel-loader',
          options: { presets: ['react', 'es2016'] }
        }]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({title: 'library'}), /* loads multiple scripts in auto-generated build/index.html */
    /* new webpack.DefinePlugin({ 
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }), */
    new webpack.optimize.CommonsChunkPlugin({ /* separately bundles vendor code */
      name: 'vendor',
      minChunks: Infinity,
    })  
  ]
}

// if (ENV === 'production') { baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin()) }
module.exports = baseConfig