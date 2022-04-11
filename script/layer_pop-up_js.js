$(function(){
  $(".check2 .submit").click(function(){
    $(".popup").fadeIn();/*서서히나타남*/
  });
  $(".popup .close").click(function(){
    $(".popup").fadeOut();/*서서히사라짐 */
  });
});