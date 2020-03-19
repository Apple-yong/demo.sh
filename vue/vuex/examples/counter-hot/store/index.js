import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
const state = {
    count: 0,
    history: []
}


const store = new Vuex.Store({
  // 相当于data
  state,
  getters,
  actions,
  mutations
})

// 监听这几个模块，如果发生变化，则进行热重载
if( module.hot ){
  module.hot.accept(['./actions.js','./getters.js','./mutations.js'], () => {
    store.hotUpdate({
      getters: require('./getters').default,
      actions: require('./actions').default,
      mutations: require('./mutations').default
    })
  })
}

export default store