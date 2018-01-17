
(function(){


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

})();

//Cache reference to window and animation items
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }