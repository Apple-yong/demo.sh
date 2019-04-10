setTimeout(() => {
    siteWelcome.classList.remove('active')
}, 300);  
// portfolio1.onclick = function () {  
//     portfolioBar.className = "bar state-1"
// }
// portfolio2.onclick = function () {  
//     portfolioBar.className = "bar state-2"
// }
// portfolio3.onclick = function () {  
//     portfolioBar.className = "bar state-3"
// }
let specialTags = document.querySelectorAll('[data-x]')
for(let i=0; i<specialTags.length; i++){
    specialTags[i].classList.add('offset')
}
setTimeout(() => {
    crollText()
}, 300);
window.onscroll = function () {
    window.scrollY > 0 ? (topNavBar.classList.add('sticky')):(topNavBar.classList.remove('sticky'))
    crollText()
}

function crollText(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i=0;i<specialTags.length;i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i
        }
    }
    // minIndex就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+ id +'"]')
    let li = a.parentNode
    let brothersAndme = li.parentNode.children
    for(let i=0;i<brothersAndme.length;i++){
        brothersAndme[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}

let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function (x) {
        // console.log(this.children[1])
        // while(brother.tagName !== 'UL'){
        //     brother = brother.nextSibling
        // }
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for(let i=0; i<aTags.length; i++){
    aTags[i].onclick = function (x) {
        x.preventDefault();//取消默认的锚点滚动
        // let href = this.getAttribute('href')
        // let element = document.querySelector(href)
        let top = document.querySelector(this.getAttribute('href')).offsetTop//获取该div到定点的距离
        // let n = 25 //动25次
        // let duration = 500 / n //多少时间动一次
        let currentTop = window.scrollY //当前高度
        let targetTop = top - 80 //目标top
        // let distance = (targetTop - currentTop)/ n //每次动多少
        // let i = 0
        // let id = setInterval(() => {
        //     if(i===n){ //等于25次时停止
        //         window.clearInterval(id)
        //         return
        //     }
        //     i = i + 1
        //     window.scrollTo(0, currentTop + distance * i)
        // }, duration)    
        var coords = { y: currentTop }; 
        var tween = new TWEEN.Tween(coords) 
        .to({ y: targetTop }, 500) 
        .easing(TWEEN.Easing.Quadratic.In) 
        .onUpdate(function() { 
            window.scrollTo(0,coords.y)
        })
        .start();
    }
}



// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

