const obj1 = {
    age: 20,
    name: "Lee",
    address: {
        city: '北京'
    },
    arr: ['a', 'b', 'c']
}


/**
 * 深拷贝
 */

function deepClone(obj) {  
    //obj为null，不是对象数组，直接返回
    if(typeof obj !== 'object' || obj == null){
        return obj
    }
    //初始化返回结果
    let result
    //是不是数组，否则为对象
    (obj instanceof Array) ? result = [] : result = {}
    //遍历obj的key
    for(let key in obj){
        //保证key不是原型的属性
        if(obj.hasOwnProperty(key)){
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    return result
}



const obj2 = deepClone(obj1)
obj2.address.city = "广州"
console.log(obj1.address.city)   
console.log(obj1)
console.log(obj2) //相互独立不影响



