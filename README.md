# vue脚手架

  1.版本:
    1.脚手架版本4.x Vue版本2
    2.脚手架版本2. Vue版本2.
  2.stylus
    1.css预编译语言
    2.语法特点
      1.省略{} 冒号 分号
      2.明显的层级关系,该关系同DOM结构一致
      3.定义变量: $color = red
      4.定义混合(mixins): 等同于之前的函数,便于复用代码
      5.定义函数: 用于内部计算
      6.父级引用: & = 当前位置的父级
      7.引入: @import '文件路径'
# 适配

  1.为什么要做适配
    1.手机默认的网页宽度是980,手机屏幕的大小通常小于980
    2.手机机型不同,屏幕大小不同
  2.适配的目的
    1.让一张设计稿的内容在不同的机型上呈现的一致(等比)
  3.如何做适配
    1.viewport适配
      1.视觉视口: 所见即所得，屏幕大小
      2.布局视口: 网页的宽度
      3.适配: 布局视口 = 视觉视口
      4.代码实现:<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
      5.rem适配
        1.rem:根节点字体大小
        2.function remRefResh() {
            // 获取屏幕宽度
            let clientWidth = document.documentElement.clientWidth
            // 将屏幕宽度等分 等分的目的：降低单位rem值的大小，便于换算，提高精确度
            let rem = clientWidth / 10
            // 设置根节点的字体大小
            document.documentElement.style.fontSize = rem + 'px'
              // 设置body字体大小
            document.body.style.fontSize = '16px'
          }
          window.addEventListener('pageshow', () => {
            remRefResh()
          })
          let timeoutId
          window.addEventListener('resize', () => {
            // 防抖，把上一次定时器清掉
            timeoutId && clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
              console.log('resize')
              remRefResh()
            }, 2000)
          })
# 路由

  1.核心概念
    1.路由器 const router = new VueRouter()
    2.安装路由器 new Vue({router})
    3.管理路由 new VueRouter({routes}), routes=[{path: '路由路径', component: 路由组件 }]
    3.请求路由 路由链接router-link to='路由路径'
    4.显示路由组件 <router-view />