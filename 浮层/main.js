var result=true;
// if(result){
//     clickMe.addEventListener('click', function(e){
//         popover.style.display = 'none'
//     })
//     console.log(false)
// }else{
//     clickMe.addEventListener('click', function(e){
//         popover.style.display = 'block'
//     })
//     wrapper.addEventListener('click', function(e){
//         e.stopPropagation()
//     })
//     console.log(true)
// }

clickMe.addEventListener('click', function(e){
    if(result){
        popover.style.display = 'block'
        result=!result 
    }else{
        popover.style.display = 'none'
        result=!result
    }
})
wrapper.addEventListener('click', function(e){
    e.stopPropagation()
})

document.addEventListener('click', function(){
    popover.style.display = 'none'
    result=true;
})