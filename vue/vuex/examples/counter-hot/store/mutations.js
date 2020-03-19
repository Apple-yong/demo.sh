// 相当于methods,只允许同步操作，不允许异步操作，对state修改只能在这进行
const mutations = {
    increment(state){
      state.count++
      state.history.push('increment')
    },
    decrement(state){
      state.count--
      state.history.push('decrement')
    }
  }

export default mutations