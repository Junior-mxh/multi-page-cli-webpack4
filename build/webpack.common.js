 const path = require('path');
 const merge = require('webpack-merge');
 const webpack = require('webpack');
//  const HtmlWebpackPlugin = require('html-webpack-plugin');
 const devMode = process.env.NODE_ENV !== 'production';
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 const viewsConfig = require('./views.conf');
 const viewsHtmlPlugins = require('./views.html-plugins');
 const assetsPublicPath = devMode  ? '/' : './' //项目根区分环境
 function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
 const fileLoader = (type,outputPath) => {
  return [{
          loader: 'url-loader',//带图片转base64功能
          options: {
              name: '[name].[hash].[ext]',
              limit: type === 'img'?10240 : '',
              outputPath: outputPath,
          }
         }]
}
console.log(viewsHtmlPlugins)
 module.exports = merge([{
   entry: {
    // 'dependencies':viewsConfig.dependencies
    //  app: path.join(__dirname, '../src/index.js')
    //  a:path.join(__dirname, '../src/views/a/app.js'),
    //  b:path.join(__dirname, '../src/views/b/app.js'),
    //  b:path.join(__dirname, '../src/view/b.js')
   },
   resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
        // 'vue': 'vue/dist/vue.esm.js',
        '@': resolve('src')
    }
   },
   module: {
    rules: [
        {
            test:/\.vue$/,
            loader:'vue-loader',
            // options: vueLoaderOptions(env === 'development')
        },
        {
           test: /\.css$/,
           use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ],
         },
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: fileLoader('img','img/')
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: fileLoader('font','fonts/')
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
    //  new HtmlWebpackPlugin({
    //     chunks: ['runtime','common','a'],
    //     title: 'a',
    //     template:path.join(__dirname, '../src/index.html'),
    //     filename: "a.html",
    //     chunksSortMode: 'manual'//应用文件顺序
    //  }),
    //  new HtmlWebpackPlugin({
    //   chunks: ['runtime','common','b'],
    //   title: 'b',
    //   template:path.join(__dirname, '../src/index.html'),
    //   filename: "b.html",
    //   chunksSortMode: 'manual'//应用文件顺序
    //  }),
     new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? '[name].css' : 'css/[name].[hash].css',
    }),

    new VueLoaderPlugin()
   ],
   output: {
     publicPath:assetsPublicPath,//项目根
     filename: 'js/[name].bundle.js',
     path: path.resolve(__dirname, '../dist')
   }
 }].concat(viewsHtmlPlugins))