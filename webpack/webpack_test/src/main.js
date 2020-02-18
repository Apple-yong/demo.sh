// 项目JS入口文件

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import './css/index.css'
import './css/index.less'
import './css/index.scss'

$(function () {
    $('li:odd').css('backgroundColor', 'black')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})