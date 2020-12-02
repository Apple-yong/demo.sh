function ajax(url, successFn) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      successFn(xhr.responseText);
    }
  };
  xhr.send();
}

function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
          reject(new Error("404 NOT FOUND"));
        }
      }
    }
    xhr.send(null)
  })
  return p
}

// 防抖
function debounce(fn, delay) {
    let timer; // 维护一个 timer
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments); // 用apply指向调用debounce的对象，相当于this.fn(arguments);
        }, delay)
    }
}

//测试用例
// test
function testDebounce(e, content) {
    console.log(e, content);
}
let testDebounceFn = debounce(testDebounce, 1000); // 防抖函数
document.onmousemove = function (e) {
    testDebounceFn(e, 'debounce'); // 给防抖函数传参
}

// 节流
function throttle(fn, delay) {
    let timer;
    return function () {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
        }, delay)
    }
}

//测试用例
function testThrottle(e, content) {
    console.log(e, content);
}
let testThrottleFn = throttle(testThrottle, 1000); // 节流函数
document.onmousemove = function (e) {
    testThrottleFn(e, 'throttle'); // 给节流函数传参
}