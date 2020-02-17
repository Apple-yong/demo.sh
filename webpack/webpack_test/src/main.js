// 项目JS入口文件

import $ from 'jquery'
$(function () {
    $('li:odd').css('backgroundColor', 'black')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})