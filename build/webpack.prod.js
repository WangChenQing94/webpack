
const handleConfigInfo = (percentage, message, ...args) => {
  // console.log('----------------')
  // console.log(percentage.toFixed(2) * 100 + '%')
  // console.log(message)
  // console.log(...args);
  // console.info(percentage, message, ...args);
}

const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production', // none development production
  devtool: 'cheap-module-source-map',
  // 统计信息
  // stats: 'verbose',
}

module.exports = merge(webpackConfig, prodConfig);