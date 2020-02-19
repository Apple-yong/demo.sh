// 项目JS入口文件
import Vue from "vue"
import App from "./App.vue"

//引入vue-router
import VueRouter from "vue-router"
Vue.use(VueRouter)
//引入自己封装的router路由
import router from "./router.js"

var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router
})