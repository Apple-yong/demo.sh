import Vue from 'vue'
import Vuex from 'vuex'
import Hello_store from './Hello_store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Hello: Hello_store
    }
})
