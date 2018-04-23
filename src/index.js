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
  
document.body.appendChild(component());