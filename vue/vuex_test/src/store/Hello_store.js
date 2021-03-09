export default{
    state: {
        name:'你好',
        count: 0
    },
    mutations: {
        add(state) {
            state.count++
        },
        addN(state, step) {  
            state.count += step
        }
    },
    actions: {
        addAsync(context, step) {
            setTimeout(() => {
                context.commit('addN', step)
            }, 1000);
        }
    },
    getters: {
        showNum(state) {
            return `当前数字为` + state.count
        }
    }
}