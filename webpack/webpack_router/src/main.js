// 项目JS入口文件
import Vue from "vue"
import VueRouter from "vue-router"

// 导入组件
import App from "./App.vue"
import account from "./main/Account.vue"
import goodslist from "./main/GoodsList.vue"

// 导入子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
        { path: '/goodslist', component: goodslist }
    ]
})

var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router
})