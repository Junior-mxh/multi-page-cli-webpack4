const viewsConfig = require('./views.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const views = viewsConfig.views

const normalize = (title,pageName) =>{
    const entry = {}
    const url = './src/views/'+ pageName +'/app.js'
    entry[pageName] = url
    return  {
        title:title,
        entry:entry,
        template:'./src/index.html',
        name:pageName,
        chunks: ['runtime','dependencies','common',pageName]
    }
}

const generatePage = function ({
    title = '',
    entry = '',
    template = '',
    name = '',
    chunks = []
 } = {}) {
     return {
         entry,
         plugins:[
             new HtmlWebpackPlugin({
                 chunks,
                 template,
                 title,
                 filename:name + '.html',
                 chunksSortMode: 'manual'//应用文件顺序
             })
         ]
     }
 }

const configPages = []
views.map(item=>{
    configPages.push(normalize(item.title,item.pageName))
})
const config = []
configPages.map(item => {
    config.push(generatePage(item))
})

module.exports = config