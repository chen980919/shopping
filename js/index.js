$(function() {
    $('.conttainer').fullpage({
    	//页面顶部对其
    	verticalCentered:false,
    	//右侧的导航
    	navigation:true,
    	//设置每屏的颜色
    	sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
    	//滚完会调函数
    	afterLoad:function(link,index) {
    		if(index < 8){
				$('.more').fadeIn();
			};
    		$(this).addClass('now');
    	},
    	//离开屏幕的回调函数
    	onLeave:function(index,nextIndex,direction) {
		   $('.more').hide();
		   if(index == 2 && nextIndex == 3){
			$('.section:eq(1) .sofa').addClass('animated');
		} else if(index == 3 && nextIndex == 4){
			$('.section:eq(2) .sofa').addClass('animated');
		} else if ( index == 5 && nextIndex == 6 ) {
			$('.section:eq(4) .sofa').addClass('animated');
			$('.section:eq(5) .box').addClass('animated');
		} else if(index == 6 && nextIndex == 7){
			$('.section:eq(6) .star img').each(function (i,item) {
				$(item).delay(i*500).fadeIn();
			});
		}
	 },
	//  控制页面切换的时间
	scrollingSpeed:1000,
	// 监听购物车的动画结束事件
	afterRender:function () {
		$('.section:eq(3) .cart').on('animationend',function (){
			$('.section:eq(3) .address').fadeIn(500,'linear',function () {
				$(this).find('img:eq(1)').fadeIn();
			});
			$('.section:eq(3) .text').find('img:eq(0)').hide;
			$('.section:eq(3) .text').find('img:eq(1)').fadeIn(500);
		});
		// 点击切换下一屏
		$('.more').on('click',function () {
			$.fn.fullpage.moveSectionDown();
		});
		// 第八层的鼠标跟随和点击再来一次
		$('.section:eq(7)').on('mousemove',function(e){
			$(this).find('.hand').css({
				left:e.pageX,
				top:e.pageY + 20
			})
		}).on('click','.again',function (){
			$.fn.fullpage.moveTo(1);
			$('.section now').removeClass('now');
			$('.section').find('animated').removeClass('animated');
			$('.section').find('[style]').removeClass('style');
		})

	}
    })
});