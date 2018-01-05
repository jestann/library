const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
}

/*
output: {
    filename: 'main.js',
    path: path.resolve('./build')
  }
*/

/*

write your own 3d library
glsl
ray tracer - ray caster
3d to 2d conversion
don't actually do matrix manipulation
painter's algorithm
quad trees and octo trees
discrete convolution

*/