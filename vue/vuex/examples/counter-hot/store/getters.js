const limit = 5
// 相当于计算属性computed
const getters = {
    recentHistory: state => {
        const end = state.history.length
        const begin = end - limit > 0 ? end - limit : 0
        return state.history.slice(begin, end).toString().replace(/,/g, ', ')
    },
        count: state => state.count
}

export default getters