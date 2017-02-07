$(document).ready(function(){
	(function(){
		var imgUl=$('#ad').find('.img');
		var imgUlLi=imgUl.find('li');
		var spotUl=$('#ad').find('.spot');
		var spotUlLi=spotUl.find('li');
		var iNow=0;
		var timer=null;

		autoPlay();

		spotUlLi.hover(function(){
			clearInterval(timer);
			iNow=$(this).index();
			fnFade();
		},function(){
			autoPlay();
		});

		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow %=4;
				fnFade();
			},2000);
		}

		function fnFade(){
			imgUlLi.each(function(i){
				if(i!=iNow){
					imgUlLi.eq(i).stop().fadeOut().css('z-index','1');
					spotUlLi.eq(i).removeClass('native');
				}else{
					imgUlLi.eq(i).stop().fadeIn().css('z-index','1');
					spotUlLi.eq(i).addClass('native');
				}
			});
		}
	})();
});