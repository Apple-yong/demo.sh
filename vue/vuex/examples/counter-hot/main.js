import 'babel-polyfill'
import Vue from 'vue'
import Counter from './Counter-hot.vue'
import store from './store/index'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})
