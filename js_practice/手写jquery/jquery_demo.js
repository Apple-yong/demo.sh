class jQuery {
    constructor(selector){
        const result = document.querySelectorAll(selector)
        const length = result.length
        for(let i=0; i < length; i++){
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }
    get(index){
        return this[index]
    }
    each(fn) {
        for(let i=0; i<this.length; i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn){
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
}

// 弹窗插件
jQuery.prototype.dialog = function (info) {
    alert(info)
}


// promise加载图片
function loadImg(src) {  
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            const err = new Error(`图片加载失败 ${src}`)
            reject(err)
        }
        img.src = src
    });
}

const url = "https://upload.jianshu.io/users/upload_avatars/4820992/9165dbb8-9df8-467a-af97-773c0e0a2d05.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
loadImg(url).then(img =>{
    console.log(img.width)
    return img
}).then(img =>{
    console.log(img.height)
}).catch(ex => console.log(ex))


// 手写bind函数
Function.prototype.bind1 = function () {
    // 将参数解析为数组  
    const args = Array.prototype.slice.call(arguments)
    // 获取this(去除数组第一项，数组剩余的就是传递的参数)
    const t = args.shift()
    const self = this  // 当前函数
    // 返回一个函数
    return function () {  
        // 执行原函数，并返回结果
        return self.apply(t, args)
    }
}

// 执行例子
function fn1(a,b,c) {  
    console.log('this', this);
    console.log(a,b,c)
    return 'this is fn1'
}

const fn2 = fn1.bind1({x:100}, 10, 20, 30)
const res = fn2()
console.log(res);


// Promise执行案例
Promise.resolve().then(() =>{
    console.log('1');
}).catch(() => {
    console.log('2');
}).then(() => {
    console.log('3');
})


Promise.resolve().then(() =>{
    console.log('1');
    throw new Error("error1")
}).catch(() => {
    console.log('2');
}).then(() => {
    console.log('3');
})


Promise.resolve().then(() =>{
    console.log('1');
    throw new Error("error1")
}).catch(() => {
    console.log('2');
}).catch(() => {
    console.log('3');
})

// 执行async函数，返回的是Promise对象
async function fn1() {  
    return 100
}
const res1 = fn1()
console.log(res1);

// await相当于Promise的then
(async function () {  
    const p1 = Promise.resolve(300)
    const data = await p1    // await相当于Promise的then，resolved才会执行
    console.log(data);
})()

(async function () {  
    const data = await 200    // await相当于Promise的then，resolved才会执行
    console.log(data);
})()


async function fn1() {  
    return Promise.resolve(200)
}
(async function () {  
    const data = await fn1()    
    console.log(data);
})()

// try...catch可捕获异常，代替了Promise的catch
(async function () {  
    const p1 = Promise.reject("err1")
    try {
        const res = await p4
        console.log(res);
    } catch (error) {
        console.log(error);
    }
})()


// async/await执行顺序案例
// 案例1
async function async1() {  
    console.log('async start');// 2.1 打印
    await async2()   //3、执行
    console.log('async1 end');  // 5、打印
}

async function async2() {  
    console.log('async2');// 3.1 打印
}

console.log('script start'); // 1、执行并打印
async1() // 2、执行
console.log('script end'); //4、打印


// 案例2
async function async1() {  
    console.log('async1 start');
    await async2()   
    console.log('async1 end');  
    await async3()   
    console.log('async1 end 2');  
}

async function async2() {  
    console.log('async2');
}

async function async3() {  
    console.log('async3');
}

console.log('script start'); 
async1() 
console.log('script end'); 


//script start
//async1 start
//async2
//script end
//async1 end
//async3
//async1 end 2


// for of异步遍历
function muti(num) {  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000);
    });
}
const nums = [1, 2, 3];

// forEach遍历，没有延迟
nums.forEach(async (i) => {
    const result = await muti(i)
    console.log(result);
});

// for of异步遍历，有延迟
(async function () {  
    for (const i of nums) {
        const result = await muti(i)
        console.log(result);
    }
})()


// 宏任务与微任务
console.log(100)
setTimeout(() => {
    console.log(200);   
}); // 宏任务
Promise.resolve().then(() =>{
    console.log(300);
}) // 微任务
console.log(400);

// 综合题目
async function async1() {  
    console.log('async1 start');// 3.1 输出
    await async2()   // 4 执行
    console.log('async1 end');// 5 异步  微任务1
}

async function async2() {  
    console.log('async2'); // 4.1 输出
}

console.log('script start');  // 1、输出

setTimeout(() => {  // 2、执行，异步，宏任务1
    console.log('setTimeout');
}, 0);

async1()  // 3、执行

// 初始化Promise，传入的函数会立刻执行
new Promise((resolve, reject) => {  
    console.log('promise1'); // 6、输出
    resolve()   // 异步 微任务2
}).then(() =>{
    console.log('promise2');
})
console.log('script end');// 7、输出，同步执行完毕，异步先执行微任务，再执行宏任务

//script start
//async1 start
//async2
//promise1
//script end
//async1 end
//promise2
//setTimeout


// DOM插入性能优化
const listNode = document.getElementById('list')
// 插入一个文档片段，此时还没有插入到DOM书中
const frag = document.createDocumentFragment()
// 执行插入
for (let x = 0; x < 10; x++) {
    const li = document.createElement("li")
    li.innerHTML = "List item" + x
    frag.appendChild(li)
}
// 都完成后，最后插入到DOM树中
listNode.appendChild(frag)

// 对DOM查询做缓存
const pList = document.getElementsByTagName("p")
const pLength = pList.length
for (let i = 0; i < pLength; i++) {
    // 缓存length ,只进行一次DOM查询 
}



// 通用事件监听事件
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