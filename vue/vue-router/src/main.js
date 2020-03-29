import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  var logged_in = false
  if(!logged_in && to.path == '/user'){
    alert('你没登录')
    next('/')
  }
  else
    next() 
})