 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
 const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: "single",
    splitChunks: {
      // chunks: "initial", // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
      // minSize: 0, // 最小尺寸，30000
      // minChunks: 1, // 最小 chunk ，默认1
      // maxAsyncRequests: 5, // 最大异步请求数， 默认5
      // maxInitialRequests : 3, // 最大初始化请求书，默认3
      automaticNameDelimiter: '~',// 打包分隔符
      name: function(){}, // 打包后的名称，此选项可接收 function
      cacheGroups: {
        // 注意: priority属性
        // 其次: 打包业务中公共代码
        common: {
          name: "common",
          chunks: "all",
          minChunks: 2,
          minSize: 1,
          priority: 0
        }
        // 首先: 打包node_modules中的文件
        // vendor: {
        //   name: "vendor",
        //   test: /[\\/]node_modules[\\/]/,
        //   chunks: "all",
        //   priority: 10
        // }
      }
      // cacheGroups:{ // 这里开始设置缓存的 chunks
      //     priority: 0, // 缓存组优先级
      //     vendor: { // key 为entry中定义的 入口名称
      //         chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是async) 
      //         test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
      //         name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
      //         minSize: 30000,
      //         minChunks: 1,
      //         enforce: true,
      //         maxAsyncRequests: 5, // 最大异步请求数， 默认1
      //         maxInitialRequests : 3, // 最大初始化请求书，默认1
      //         reuseExistingChunk: true // 可设置是否重用该chunk
      //     }
      // }
    }
   },
   plugins:[
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname, '../'),       　　　　　　　　　　//根目录
      verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
      dry:      false        　　　　　　　　　　//启用删除文件
    })
   ]
 });