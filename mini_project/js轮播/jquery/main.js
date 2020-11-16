// $(p1).click(function(){
//     $(images).css({
//         transform: 'translateX(0)'
//     })
// });
// $(p2).click(function(){
//     $(images).css({
//         transform: 'translateX(-300px)'
//     })
// });
// $(p3).click(function(){
//     $(images).css({
//         transform: 'translateX(-600px)'
//     })
// });

(function(){//立即执行函数，避免污染全局变量
    var allButtons = $('#button > span')
    for(var i=0; i<allButtons.length; i++){
        $(allButtons[i]).click(function (x) {
            var index = $(this).index()//jquery直接获取第几张
            var p = index * -300
            $(images).css({
                transform: 'translateX(' + p + 'px)'
            })
            activeButton($(this))
        })
    }

    //自动轮播
    var n=0
    var size = allButtons.length
    allButtons.eq(n%size).trigger('click')
    activeButton(allButtons.eq(n%size))
    var timeId = setTimer()

    //鼠标hover停止播放
    $('.carousel').mouseenter(function(){
        window.clearInterval(timeId)
    });

    $('.carousel').mouseleave(function(){
        timeId = setTimer()
    });


    
    function setTimer() {  
        return setInterval(() => {
            n+=1
            playSlide(n%size)//模仿点击，触发被选元素的指定事件类型
        }, 3000);
    }
    //播放列表
    function playSlide(index) {  
        allButtons.eq(index).trigger('click')
        activeButton(allButtons.eq(index))
    }
    //高亮红色，其余不变
    function activeButton($button) {
        $button
            .addClass('red')
            .siblings('.red').removeClass('red')
    }


    //原生js实现当前点击的第几个span
    function numberSpan(s) {
        var n
        for(let i=0;i<allButtons.length;i++){
            if(allButtons[i] === s){
                n=i
                break;
            }
        }
        return n
    }
    // 原生JS获取this之外的其他元素，等价于jquery的siblings
    function getSiblings(n) {
        return getChildren(n.parentNode.firstChild, n);
        function getChildren(n, skipMe){
            var r = [];
            for ( ; n; n = n.nextSibling ) 
            if ( n.nodeType == 1 && n != skipMe)
                r.push( n );        
            return r;
        }
    }

})()