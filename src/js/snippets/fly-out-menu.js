$(".m-menu-open a, .m-menu-close a").click(function(){
	$(".page-holder").toggleClass("open", 500, "easeInOutQuart");

});

$(window).resize(function(){
  $(".page-holder").removeClass("open", 0);
});