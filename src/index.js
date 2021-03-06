import _ from 'lodash'
import './style.css'
import Icon from './cake.png'
import printMe from './print'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // 将图像添加到现有的 div
  var myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  // innerHTML and onclick not a function!
  btn.innerHTML = 'Click me and check console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element;
}

let element = component() // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js',function(){
    console.log('Accept the update printMe moudle!')
    document.body.removeChild(element)
    element = component() // 重新渲染页面后， component 更新 click 事件处理
    document.body.appendChild(element)
  })
}