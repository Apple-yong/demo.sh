// 项目JS入口文件
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// 导入组件
import login from "./login.vue"
import Account from "./main/Account.vue"
import GoodsList from "./main/GoodsList.vue"

const router = new VueRouter({
    routes: [
        { path: '/account', component: Account },
        { path: '/goodsList', component: GoodsList }
    ]
})

var vm = new Vue({
    el: "#app",
    render: c => c(login),
    router
})