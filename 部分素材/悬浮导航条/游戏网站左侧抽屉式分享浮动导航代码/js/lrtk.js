function sideFixed(){
	var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
	var a1 = 650;
	var ww = $(window).width();
	if(ww>540){
		if(a1<=scrolltop){
			$('.appgame-app-dl,#appgame-leftside-share').slideDown();
			}
		else{
			$('.appgame-app-dl,#appgame-leftside-share').slideUp();
			}
		}
	}

$(function(){
	sideFixed();
	$(window).scroll(function(e) {
    sideFixed();
  });
	$(".appgame-sidebar-glist li").mouseenter(function(e) {
      if($(this).hasClass('current')){
				
				}
			else{
				$(this).parent('ul').find('li').removeClass('current');
				$(this).addClass('current');
				}
    });
		
		$('.appgame-comments').click(function(e) {
      $('html,body').animate({scrollTop:$('#appgame-comments').offset().top},400);
    });
    
    
	});
/*$(window).load(function(e) {
	ykplayer=document.getElementById('youku-player');
	wmode=document.createElement('param');
	wmode.name='wmode';
	wmode.value='Opaque';
	ykplayer.appendChild(wmode);
});*/

/*左侧滚动导航*/
function gotoTPoint(obj, speed) {
    var objTop;
    var objId = '#' + obj;
    if (obj != 'top') {
        objTop = $(objId).offset().top-70;
    } else {
        objTop = 0;
    }
    $('html,body').animate({
        scrollTop: objTop
    }, speed);
}