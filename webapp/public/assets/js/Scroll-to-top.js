jQuery(document).ready(function($){
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.cd-top').fadeIn('slow');
        } else {
            $('.cd-top').fadeOut('slow');
        }
    });

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});