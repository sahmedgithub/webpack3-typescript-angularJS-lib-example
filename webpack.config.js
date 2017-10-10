var path = require("path");
var webpack = require("webpack");

var PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, 'dist'),
}

var config = {
  entry: {
    'my-lib': [PATHS.entryPoint],
    'my-lib.min': [PATHS.entryPoint]
  },
  output: {
    path: PATHS.bundles,
    filename: '[name].umd.js',
    libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true
  },
  externals: {
    angular: {
           commonjs: 'angular',
           commonjs2: 'angular',
           amd: 'angular',
           root: 'angular'
         }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      include: /\.min.umd\.js$/,
    })
  ],
  module: {
    loaders: [{
      test: /\.ts?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }]
  }
}

module.exports = config;