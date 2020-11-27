// 事件绑定
function bindEvent(elem, type, selector, fn) {  
    // 如果传了三个参数
    if(fn == null){
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            // 代理绑定，绑定无限个
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}


const test1 = document.getElementById("tyre")
const event1 = function () {  
    console.log(this.innerText);
}


// 绑定多个
//bindEvent(test1,'click','p',event1)

// 绑定一个
const event2 = function () {  
    console.log(this.id);
}
bindEvent(test1,'click',event2)
