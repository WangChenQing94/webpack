
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base');


const handleConfigInfo = (percentage, message, ...args) => {
  // console.log('----------------')
  // console.log(percentage.toFixed(2) * 100 + '%')
  // console.log(message)
  // console.log(...args);
  // console.info(percentage, message, ...args);
}

const devConfig = {
  mode: 'development', // none development production
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    // hotOnly: true
  },
  // plugin 在于解决loader无法实现的其他事情、webpack插件是一个具有apply方法的js对象，apply方法会被webpack.compiler调用，并且compiler对象可在整个编译生命周期访问
  plugins: [
    // new webpack.ProgressPlugin(handleConfigInfo),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(webpackConfig, devConfig);