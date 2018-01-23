//Used for smooth scrolling
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'swing');
});

//Used for cleaner navigation
$('body').scrollspy({ target: '#navbar' });


/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("navscrolled");
    }else{
        $('.navbar').removeClass("navscrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$('.nav a').click(function () {
    $('.navbar-collapse').collapse('hide');
});

(function(){

    /*

//Used for on page loading
anime({
    targets: '#heading',
    opacity: {
        value: 1,
        duration: 3000,
        easing: 'easeOutExpo'
    },
    delay: 250,
    translateY: {
        value: [50, 0],
        duration: 3000,
        easing: 'easeOutExpo'
      }
  });

  anime({
    targets: '#scroll-text',
    opacity: {
        value: 1,
        duration: 3000,
        easing: 'easeOutExpo'
    },
    delay: 2000
  });

  //Both for the same object
  anime({
    targets: '#scroll-icon',
    opacity: {
        value: 1,
        duration: 3000,
        easing: 'easeOutExpo'
    },
    delay: 2000
  });

  anime({
    targets: '#scroll-icon',
    translateY: {
        value: 10,
        duration: 800,
      },
    direction: 'alternate',
    loop: true
  });


  
  anime({
    targets: '#slogan',
    opacity: {
        value: 1,
        duration: 3000,
        easing: 'easeOutExpo'
    },
    delay: 1000,
    translateY: {
        value: [50, 0],
        duration: 3000,
        easing: 'easeOutExpo'
      }
  });

  */

})();
