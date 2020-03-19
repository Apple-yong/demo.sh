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

export default store