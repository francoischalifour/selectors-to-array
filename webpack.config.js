const path = require('path')
const webpack = require('webpack')

const pkg = require('./package.json')

const libraryName = pkg.name
const banner = `
   ${libraryName} v${pkg.version}
   ${pkg.description}
   Copyright (c) ${new Date().getFullYear()} ${pkg.author.name}
   https://github.com/${pkg.repository}
   ${pkg.license} license
`
module.exports = {
  entry: path.join(__dirname, `/src/${libraryName}`),
  output: {
    path: './',
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ],
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
}
