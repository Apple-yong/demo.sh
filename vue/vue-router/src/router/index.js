import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import UserMore from '../views/UserMore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      login_required: false   // 要不要判断是否登录
    }
  },
  {
    path: '/user/:name',
    name: 'User',
    component: User,
    props: (route) => ({ name: route.query.age }),
    children: [
      {
        path: 'usermore',
        name: 'UserMore',
        component: UserMore
      }
    ],
    meta: {
      login_required: false   // 要不要判断是否登录
    }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
