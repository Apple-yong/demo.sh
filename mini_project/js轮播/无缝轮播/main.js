// setTimeout(() => {
//     $('.images>img:nth-child(1)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images>img:nth-child(2)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images>img:nth-child(1)').one('transitionend', function name() { //动画执行完后
//         $(this).addClass('right').css({transform: 'none'})
//     })
// }, 3000);

// setTimeout(() => {
//     $('.images>img:nth-child(2)').css({
//         transform: 'translateX(-200%)'
//     })
//     $('.images>img:nth-child(3)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images>img:nth-child(2)').one('transitionend', function name() { //动画执行完后执行1次
//         $(this).addClass('right').css({transform: 'none'})
//     })
// }, 6000);

// setTimeout(() => {
//     $('.images>img:nth-child(3)').css({
//         transform: 'translateX(-300%)'
//     })
//     $('.images>img:nth-child(1)').css({
//         transform: 'translateX(-100%)'
//     })
//     $('.images>img:nth-child(3)').one('transitionend', function name() { //动画执行完后,执行1次
//         $(this).addClass('right').css({transform: 'none'})
//     })
// }, 9000);

let n
initialize()//初始化
let timer = setInterval(() => {
    Leave(getImage(n))
    .one('transitionend', function name() { 
        Enter($(this))
    })
    Current(getImage(n+1))
    n+=1
}, 3000);

//用户切换到其他页面停止播放
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(() => {
            Leave(getImage(n))
            .one('transitionend', function name() { 
                Enter($(this))
            })
            Current(getImage(n+1))
            n+=1
        }, 3000);
    }
})

//初始化
function initialize() {  
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function x(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }
    return n
}

function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
}

function Current($node) {  
    return $node.removeClass('enter').addClass('current')
}
function Leave($node) {  
    return $node.removeClass('current').addClass('leave')
}
function Enter($node) {  
    return $node.removeClass('leave').addClass('enter')
}