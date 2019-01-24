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
var lineWidth = 5
var UsingEraser = false

//画板尺寸
autoSetcanvasSize(canvasTwo)
listenToUser(canvasTwo)
switchOver()
colorSelection()
brushSwitch()



 
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
function listenToUser(canvasTwo){
    var lastPoint = {x:undefined, y:undefined}
    var painting = false
    // 填充
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 100, 100);
    // // 只描边
    // ctx.strokeStyle = 'yellow';
    // ctx.strokeRect(10, 10, 100, 100);

    //特性检测，检测是不是触屏设备
    if(document.body.ontouchstart !== undefined){
        //触屏设备
        canvasTwo.ontouchstart = function (a) {
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            painting = true
            if(UsingEraser){
                ctx.clearRect(x-5,y-5,10,10)
            }else{
                drawCircle(x, y, 2)
                lastPoint = {"x":x,"y":y}
            }
        }
        // 移动手指
        canvasTwo.ontouchmove = function (a) {
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
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
        //松开手
        canvasTwo.ontouchend = function (a) {
            painting = false
        }
    }else{
        //非触屏设备
        canvasTwo.onmousedown = function (a) {
            var x = a.clientX
            var y = a.clientY
            painting = true
            if(UsingEraser){
                ctx.clearRect(x-5,y-5,10,10)
            }else{
                drawCircle(x, y, 2)
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
    
}
// 画圈
function drawCircle(x, y, radius) {  
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
}
// 画线
function drawLine(x1, y1, x2, y2) {  
    ctx.beginPath()
    ctx.moveTo(x1, y1)//起点
    ctx.lineWidth = lineWidth
    ctx.lineTo(x2, y2)//终点
    ctx.stroke()
}
//橡皮擦画笔切换
function switchOver(){
    for(var i=0;i<actions.children.length;i++){//id的话可以直接actions.children获取子元素
        actions.children[i].onclick = function () { 
            var idName = this.id
            if(idName === "saveImage"){
                return
            }else{
                if(idName === "eraser"){
                    UsingEraser = true
                    for(var j=0;j<colors.children.length;j++){//橡皮模式移除铅笔下颜色的active
                        colors.children[j].classList.remove('active')
                    }
                }else{
                    UsingEraser = false
                    colors.children[0].classList.add('active')
                    ctx.fillStyle = colors.children[0].id
                    ctx.strokeStyle = colors.children[0].id
                    getSiblings(this)[0].classList.remove('active')
                }
                this.classList.add('active')
                getSiblings(this)[0].classList.remove('active')
                //$(this).siblings("svg").removeClass('active')
            }  
        }
    }
}
//画笔颜色选择
function colorSelection() {  
    var colorsLis = document.getElementsByClassName("colors")[0].children;//class不唯一
    for(var m=0;m<colorsLis.length;m++){
        colorsLis[m].onclick = function () {  
            var idName = this.id
            ctx.fillStyle = idName
            ctx.strokeStyle = idName
            this.classList.add('active')
            for(var i=0;i<getSiblings(this).length;i++){
                getSiblings(this)[i].classList.remove('active')
            }
            
            //$(this).siblings("li").removeClass('active')
        }
    } 
}
//画笔粗细切换
function brushSwitch(){
    thin.onclick = function () {
        lineWidth = 5
        this.classList.add('active')
        thick.classList.remove('active')
    }
    thick.onclick = function () {
        lineWidth = 10
        this.classList.add('active')
        thin.classList.remove('active')
    }
}
//图片保存
function putImage(){
    var url = canvasTwo.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.target = '_blank'
    a.click()
    
    // //或者这样，下下来的直接改后缀png或img
    // var image = canvasTwo.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // window.location.href=image; 
} 
//清空画板
clear.onclick = function () {
    ctx.clearRect(0, 0, canvasTwo.width, canvasTwo.height);
}
// 原生JS获取this之外的其他元素，等价于jquery的siblings
function getChildren(n, skipMe){
    var r = [];
    for ( ; n; n = n.nextSibling ) 
       if ( n.nodeType == 1 && n != skipMe)
          r.push( n );        
    return r;
}
function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
}

