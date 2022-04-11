 $(function(){
 var swiper = new Swiper('.slide ', {
    slidesPerView: 3,
    spaceBetween: 400,
    direction: "vertical",
    speed: 1000,// 슬라이드가 넘어가는 시간 버튼을 클릭하고 슬라이드가 넘어가는시간
	  // autoplay: {
    //     delay: 2500,//자동으로 넘어가기 전 머무르는 시간
    //     disableOnInteraction: false,
    //   },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});