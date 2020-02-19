// 项目JS入口文件
import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import router from "./router.js"
Vue.use(VueRouter)


var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router
})