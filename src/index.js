// import Icon from './icon.jpg';
// import printMe from './print.js';
// import { cube } from './math.js';
import './style.css';
function component() {
    let element = document.createElement('div');
    // var element = document.createElement('pre');
    element.innerHTML = [
           'Hello webpack!',
           '5 cubed is equal to '
    ];
       let func = () => {}
       const NUM = 45
       let arr = [1,2,4]
       let arrb = arr.map(item => item * 2)
       arr.includes(8)
       console.log('new Set(arrb)',new Set(arrb))
    // var img = new Image()
    // img.src = Icon
    // element.append(img)
    return element;
  }
  
  let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
  document.body.append(element);


  // if (module.hot) {
  //   module.hot.accept('./print.js', function() {
  //       console.log('Accepting the updated printMe module!');
  //       document.body.removeChild(element);
  //       element = component(); // 重新渲染页面后，component 更新 click 事件处理
  //       document.body.append(element);
  //   })
  // }