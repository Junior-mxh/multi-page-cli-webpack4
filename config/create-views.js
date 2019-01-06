const path= require("path")
const viewsConfig = require('./views.conf')
//fs.existsSync(dirpath);
const fs = require('fs')
viewsConfig.views.map(item => {
    let dirpath = './src/views/'+ item.pageName
    console.log(dirpath,'111111111111')
    // let dirpath = path.join(__dirname, '../src/views/'+ item.pageName)
    // let dirname = './src/pages/'+ item.pageName
    mkdir(dirpath)
    // fs.mkdirSync('./src/views/d')
})
function mkdir (dirpath) {
    if(fs.existsSync(dirpath)){
        console.log(fs.existsSync(dirpath),'22222222222222')
        console.log(dirpath,'33333333333333333333333')
        return
    }else{
        // console.log(dirpath,'4444444444444444444')
        fs.mkdirSync(dirpath)
        console.log('4444444444444444444')
        let readStreamjs = fs.createReadStream('./src/template/app.js')
        let readStreamvue = fs.createReadStream('./src/template/app.vue')
        console.log('555555555555555555')
        let writeStreamjs  = fs.createWriteStream(dirpath+'/app.js')
        console.log('66666666666666666666666666')
        let writeStreamvue  =fs.createWriteStream(dirpath+'/app.vue')
        console.log('777777777777777777777777')
        readStreamjs.pipe(writeStreamjs)
        console.log('8888888888888888888888888888888888888')
        readStreamvue.pipe(writeStreamvue)
        console.log('9999999999999999999999999999999999999999999')
    }
}