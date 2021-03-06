import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'


export default [
  // {
  //   path: '路由路径',
  //   component: 路由组件
  // },
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/msite' // 重定向地址
  },
]