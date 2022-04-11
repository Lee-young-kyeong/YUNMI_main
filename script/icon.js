$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.fixedmenu').fadeIn();
    } else {
        $('.fixedmenu, nav').fadeOut();
    }
});

$( 'nav li:nth-child(1)' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
});

$(".fixedmenu a").click(function(){
    $("nav").slideToggle();
});

