$(window).on('load resize', function() {

		$('.galimg').each(function() {

			if( $(this).children('img').width() > $(this).children('img').height() ){

				$(this).css({'height': $(this).width()}).children('img').addClass('landscape').css({'left': '-25%'});

			}
			else{

				$(this).css({'height': $(this).width()}).children('img').addClass('portrait').css({'top': '-25%'});
			}

		})

})