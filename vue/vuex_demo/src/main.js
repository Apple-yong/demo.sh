// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuex from 'vuex'
Vue.use(vuex)



var store = new vuex.Store({//store对象
  state:{
      show:false
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
