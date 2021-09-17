import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible' // 动态计算rem值

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: '#app', // el: elment缩写 #app找到id='app'的元素,在index.html中找到
  router,
  render: h => h(App), // 虚拟dom，在vue中，将App.vue替换掉index.html中的#app render: 插入
})
