 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })
    ]
   },
   plugins:[
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname, '../'),       　　　　　　　　　　//根目录
      verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
      dry:      false        　　　　　　　　　　//启用删除文件
    })
   ]
 });