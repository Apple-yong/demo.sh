setTimeout(() => {
    siteWelcome.classList.remove('active')
}, 500);  
portfolio1.onclick = function () {  
    portfolioBar.className = "bar state-1"
}
portfolio2.onclick = function () {  
    portfolioBar.className = "bar state-2"
}
portfolio3.onclick = function () {  
    portfolioBar.className = "bar state-3"
}
window.onscroll = function () {
    window.scrollY > 0 ? (topNavBar.classList.add('sticky')):(topNavBar.classList.remove('sticky'))
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