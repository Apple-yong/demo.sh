// 项目JS入口文件
import Vue from "vue"
import login from "./login.vue"
import info,{ title, book } from "../src/js/index.js"

var vm = new Vue({
    el: "#app",
    data: {
        msg: '12'
    },
    render: params => params(login)
})

console.log(info)
console.log(title)
console.log(book)