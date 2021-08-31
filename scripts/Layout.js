(function($){

	var $navToggle = $('.nav-toggle');

	$navToggle.on('click', function(e){
		$('body').toggleClass('show-menu');
		$('.nav').toggleClass('show-menu');
		$(this).toggleClass('is-active');
	})	

})(jQuery);
