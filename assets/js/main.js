$(document).ready(function(){
	var $nav = $(".fixed-top");

	$(window).resize(function() {
    $('#hero').height($(window).height());
	}).resize();


	/*
	* Řešení po plynulou animaci scrollu na patřičnou sekci kotvy po kliku na NAV menu odkazy.
	*/
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 98
			}, 800, function () {
			});
		}
	});

	/*
	* Spustí připravenou animaci hamburgeru.
	*/
	var finished = false;

	$('.navbar-toggler').click(function (e) {
		e.preventDefault();

		while(!finished) {
			$('#nav-icon3').toggleClass('open');

		  if ($(window).scrollTop() < 10) {

		    if($('.navbar-toggler').hasClass('collapsed')) {
		      $nav.toggleClass('scrolled');
		    } else {
		      setTimeout(function(){ $nav.toggleClass('scrolled'); }, 200);
		    }

				setTimeout(function(){
					if($nav.hasClass('scrolled')) {
					$('#js-logo').attr('src', 'assets/img/logo-black.svg');
				} else {
					$('#js-logo').attr('src', 'assets/img/logo-white.svg');
				}} , 200);
		  }

			setTimeout(function(){
					finished = false;
			}, 350	);
			   
			finished = true;
		}



	});


	/*
* Po scrollu přidá transparentnímu NAV menu bílé pozadí
*/
function scrollCondition() {
  if ($(window).scrollTop() > 2) {
    $nav.addClass('scrolled');
		$('#js-logo').attr('src', 'assets/img/logo-black.svg');
  } else {
    if($('.navbar-toggler').hasClass('collapsed')) {
      $nav.removeClass('scrolled');
			$('#js-logo').attr('src', 'assets/img/logo-white.svg')
    }

  }
}

$(window).scroll(function () {
  scrollCondition();
});
scrollCondition();


if($(window).width() < 575) {
	$("#js-fb").text('FB');
	$("#js-ig").text("IG");
}


$('.nav-item a').on('click', function() {
  $('.navbar-collapse').removeClass('show');

  $('#nav-icon3').removeClass('open');
  $('.navbar-toggler').addClass('collapsed');
});

});
