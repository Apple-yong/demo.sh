$(document).ready(function(){
	/* 自动计算轮播视图宽度 */
	var totWidth=0
	var positions = new Array()
	$('#slides .slide').each(function(i){
		positions[i]= totWidth
		totWidth = $(this).width() + totWidth
	})
	$('#slides').width(totWidth)

	

	$('#menu ul li a').click(function(e,keepScroll){
			$('li.menuItem').removeClass('act').addClass('inact')
			$(this).parent().addClass('act')
			var pos = $(this).parent().prevAll('.menuItem').length//获取第几个轮播按钮
			$('#slides').animate({marginLeft:-positions[pos]+'px'},450)//切换及切换速度
			
			e.preventDefault()
			// 点击图标，停止自动滚动
			if(!keepScroll) clearInterval(itvl)
	})
	
	//一开始第一项hover
	$('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact')
	
	
	
	
	//自动轮播
	var current=1
	function autoAdvance(){
		if(current==-1) return false
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true])
		current++
	}

	//自动轮播秒数
	var changeEvery = 5
	var itvl =	setInterval(() => {
		autoAdvance()
	}, changeEvery*1000);

})