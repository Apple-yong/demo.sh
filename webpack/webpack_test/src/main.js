// 项目JS入口文件

import $ from 'jquery'
$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})