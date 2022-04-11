$(function () {
	$("#board li").click(function () {
		$(this).children("div").slideToggle()
		$(this).siblings().children("div").slideUp();
		$(this).toggleClass("on").siblings().removeClass("on")
	});

	//jQuery 박스사이즈 유지
	/*$(window).resize(function () {
		var winWidth = $(window).width();
		var boxWidth = $('.map').width();
		//max-width값인 500px아래서만 작동
		if (winWidth <= 450) {
			//1.681:1
			$('.map').height(boxWidth * 0.681);
		}
	});*/
});