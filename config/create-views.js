const path= require("path")
const viewsConfig = require('./views.conf')
const fs = require('fs')
viewsConfig.views.map(item => {
    let dirpath = './src/views/'+ item.pageName
    mkdir(dirpath)
})
function mkdir (dirpath) {
    if(fs.existsSync(dirpath)){
        return
    }else{
        fs.mkdirSync(dirpath)
        let readStreamjs = fs.createReadStream('./src/template/app.js')
        let readStreamvue = fs.createReadStream('./src/template/app.vue')
        let writeStreamjs  = fs.createWriteStream(dirpath+'/app.js')
        let writeStreamvue  =fs.createWriteStream(dirpath+'/app.vue')
        readStreamjs.pipe(writeStreamjs)
        readStreamvue.pipe(writeStreamvue)
    }
}