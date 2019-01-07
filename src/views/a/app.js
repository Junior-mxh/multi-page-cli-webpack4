import Vue from 'vue'
import App from './app.vue';
// import '@babel/polyfill'
// import 'font-awesome/css/font-awesome.css'
console.log(new Set([1, 2, 3, 4, 4]))
var b = [1,2,3,4,5,6]
b.map(item =>{
  console.log(item)
})
new Vue({
    el:"#app",
    render:h => h(App)
})
