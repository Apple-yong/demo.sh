//原生js画画，快速画会有间断
// var canvas = document.getElementById('canvas')
// var painting = false //标记
// // 按下鼠标
// canvas.onmousedown = function (a) {
//     painting = true
//     var x = a.clientX
//     var y = a.clientY
//     var divA = document.createElement('div')
//     divA.style = 
//     // es6写法，变量可以用${x}
//     `
//     width: 6px;
//     height: 6px;
//     border-radius: 3px;
//     background: black;
//     position: absolute;
//     left: ${x-2}px;
//     top: ${y-2}px;
//     `
//     canvas.appendChild(divA)
// }
// // 动鼠标
// canvas.onmousemove = function (a) {
//     if(painting){
//         var x = a.clientX
//         var y = a.clientY
//         var divA = document.createElement('div')
//         divA.style = 
//         `
//         width: 6px;
//         height: 6px;
//         border-radius: 3px;
//         background: black;
//         position: absolute;
//         left: ${x-2}px;
//         top: ${y-2}px;
//         `
//         canvas.appendChild(divA)
//     }
    
// }
// // 松开鼠标
// canvas.onmouseup = function (z) {
//     painting = false    
// }




// canvas属性画图
var canvasTwo = document.getElementById('canvasTwo')
var ctx = canvasTwo.getContext('2d');
//画板尺寸
autoSetcanvasSize(canvasTwo)
listenUserMouse(canvasTwo)


//橡皮擦
var UsingEraser = false
eraser.onclick = function () {  
    UsingEraser = true
    actions.className = 'actions x'
}
brush.onclick = function () {  
    UsingEraser = false
    actions.className = 'actions'
}


//设置画板尺寸
function autoSetcanvasSize(canvasTwo){
    canvasSize()
    //如果用户改变尺寸
    window.onresize = function () {
        canvasSize()
    }
    function canvasSize(){
        var pagewidth = document.documentElement.clientWidth
        var pageheight = document.documentElement.clientHeight
        canvasTwo.width = pagewidth
        canvasTwo.height = pageheight
    }
}
//监听用户鼠标
function listenUserMouse(canvasTwo){
    var lastPoint = {x:undefined, y:undefined}
    var painting = false
    // 填充
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 100, 100);
    // // 只描边
    // ctx.strokeStyle = 'yellow';
    // ctx.strokeRect(10, 10, 100, 100);

    //监听鼠标事件，按下鼠标
    canvasTwo.onmousedown = function (a) {
        var x = a.clientX
        var y = a.clientY
        painting = true
        if(UsingEraser){
            ctx.clearRect(x-5,y-5,10,10)
        }else{
            drawCircle(x, y, 3)
            lastPoint = {"x":x,"y":y}
        }
    }
    // 移动鼠标
    canvasTwo.onmousemove = function (a) {
        var x = a.clientX
        var y = a.clientY
        if(!painting){
            return
        }
        if(UsingEraser){
            ctx.clearRect(x-5,y-5,10,10)    
        }else{
            var newPoint = {"x":x,"y":y}
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint
        }    
    }
    //松开鼠标
    canvasTwo.onmouseup = function (a) {
        painting = false
    }
}
// 画圈
function drawCircle(x, y, radius) {  
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
}
// 画线
function drawLine(x1, y1, x2, y2) {  
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(x1, y1)//起点
    ctx.lineWidth = 5
    ctx.lineTo(x2, y2)//终点
    ctx.stroke()
}