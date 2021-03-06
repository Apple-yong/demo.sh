// 这个文件可以管理多个store文件
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import dialog_store from './dialog_store.js';//引入某个store对象

export default new vuex.Store({
    modules: {
        dialog: dialog_store
    }
})