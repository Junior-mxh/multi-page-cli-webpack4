import Vue from 'vue'
import App from './app.vue';
// import '@babel/polyfill'

const asyncFun = async ()=>{
    await new Promise(setTimeout, 2000)
    
    return '2s 延时后返回字符串'
}
new Vue({
    el:"#app",
    render:h => h(App)
})
