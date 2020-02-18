// 项目JS入口文件
import Vue from "vue"
import login from "./login.vue"

var vm = new Vue({
    el: "#app",
    data: {
        msg: '12'
    },
    render: params => params(login)
})