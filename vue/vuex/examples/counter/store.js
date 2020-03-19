import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 相当于data
  state: {
    count: 0
  },
  // 相当于计算属性computed
  getters: {
    evenOrOdd: state => state.count % 2 == 0 ? 'even' : 'odd'
  },
  // 相当于methods,只允许同步操作，不允许异步操作，对state修改只能在这进行
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    incrementIfOdd(state){
      if((state.count + 1)%2 == 0){
        state.count++
      }
    }
  },
  // 异步操作，作为所有同步事件的统一出口
  actions: {
    incrementAsync({commit}){
      setTimeout(() => {
        commit.increment()
      }, 1000);
    }
  }
})

export default store