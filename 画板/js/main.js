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

// 填充
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
// 只描边
ctx.strokeStyle = 'yellow';
ctx.strokeRect(10, 10, 100, 100);