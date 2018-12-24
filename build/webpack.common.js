 const path = require('path');
 const webpack = require('webpack');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const devMode = process.env.NODE_ENV !== 'production'
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 const assetsPublicPath = devMode  ? '/' : './' //项目根区分环境
 module.exports = {
   entry: {
    //  poliyfill: "@babel/polyfill",
    //  app: path.join(__dirname, '../src/index.js')
     a:path.join(__dirname, '../src/view/a.js'),
     b:path.join(__dirname, '../src/view/b.js')
   },
   module: {
    rules: [
        {
           test: /\.css$/,
           use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ],
         },
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
                ]
          },
          {
             test: /\.js$/,
             exclude: /node_modules/, 
             loader: "babel-loader"
          }
       ]
   },
   plugins: [
     new webpack.DefinePlugin({
       "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
     }),
     new HtmlWebpackPlugin({
        chunks: ['runtime','common','a'],
        title: 'a',
        filename: "a.html",
        chunksSortMode: 'manual'//应用文件顺序
     }),
     new HtmlWebpackPlugin({
        chunks: ['runtime','common','b'],
        title: "b",
        filename: "b.html",
        chunksSortMode: 'manual'//应用文件顺序
     }),
     new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : 'css/[id].[hash].css',
    }),
   ],
   output: {
     publicPath:assetsPublicPath,//项目根
     filename: 'js/[name].bundle.js',
     path: path.resolve(__dirname, '../dist')
   }
 };