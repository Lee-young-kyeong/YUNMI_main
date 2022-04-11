$(function(){
  $("#top .nav> ul> li:nth-child(7)").mouseover(function(){
    $(this).children(".sub").stop().slideDown();/*마우스를 올린 네비 li의 그것의 자식인서브가 내려온다 */
  });
  $("#top .nav> ul> li:nth-child(7)").mouseout(function(){
    $(this).children(".sub").stop().slideUp();/*마우스를 올린 네비 li의 그것의 자식인서브가 내려온다 */
  });
});

$(window).resize(function () {
  if (window.innerWidth < 858) {
        $("#location .loca_list .loca:nth-child(1) h5").click(function(){
          $(this).siblings(".loca_box").stop().slideToggle();/*마우스를 올린 네비 li의 그것의 자식인서브가 내려온다 */
        });
        $("#location .loca_list .loca:nth-child(2) h5").click(function(){
          $(this).siblings(".loca_box").stop().slideToggle();/*마우스를 올린 네비 li의 그것의 자식인서브가 내려온다 */
        });
    }
}).resize(); 