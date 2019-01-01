const views = [//页面配置写在这里
    {
        title:'oooo',
        pageName:'a'
    },
    {
        title:'pppp',
        pageName:'b'
    }
]
const dependencies = [//依赖的全局js
    '@babel/polyfill'
]

const viewsConfig = {
    'views':views,
    'dependencies':dependencies
}

module.exports = viewsConfig