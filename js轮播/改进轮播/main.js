let $buttons = $('#buttonWrapper>button')
let $images = $('#slides>img')
let current = 0

makeSlides()
$("#slides").css({transform:'translateX(-300px)'})
bindEvents()

function bindEvents() {  
    $buttons.eq(0).click(function(){
        if(current == 2){
            $("#slides").css({transform:'translateX(-1200px)'})//假的
            .one('transitionend', function () {
                $("#slides").hide().offset()
                $("#slides").css({transform:'translateX(-300px)'}).show()
            })
        }else{
            $("#slides").css({transform:'translateX(-300px)'})
        }
        current = 0
    })
    $buttons.eq(1).click(function(){
        $("#slides").css({transform:'translateX(-600px)'})
        current = 1
    })
    $buttons.eq(2).click(function(){
        if(current == 0){
            $("#slides").css({transform:'translateX(0px)'})//假的
            .one('transitionend', function () {
                $("#slides").hide().offset()
                $("#slides").css({transform:'translateX(-900px)'}).show()
            })
        }else{
            $("#slides").css({transform:'translateX(-900px)'})
            current = 2
        }
        
    })
}


function makeSlides() {  
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)
    $("#slides").append($firstCopy)
    $("#slides").prepend($lastCopy)
}