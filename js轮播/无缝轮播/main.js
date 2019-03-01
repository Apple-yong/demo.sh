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
setInterval(() => {
    $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend', function name() { 
        $(this).removeClass('leave').addClass('enter')
    })
    $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
    n+=1
}, 3000);

function x(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }
    return n
}

//初始化
function initialize() {  
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}