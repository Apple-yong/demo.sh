export default {
  state:{
      show:false,
      name:'你爸爸吧'
  },
  // 类似于computed计算属性
  getters:{
    not_show(state){//这里的state对应着上面这个state
        return !state.show;
    }
  },
  // 类似于methods,
  mutations:{
    switch_dialogg(state){//这里的state对应着上面这个state
        state.show = state.show?false:true;
        //你还可以在这里执行其他的操作改变state
    }
  },
  // 执行多个 mutations 就需要用 action ,异步
  actions:{
    switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
        context.commit('switch_dialogg');
        //你还可以在这里触发其他的mutations方法
    },
  }
}