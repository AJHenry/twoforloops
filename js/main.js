(function(){
anime({
    targets: '#heading',
    opacity: {
        value: 1,
        duration: 3000,
        easing: 'easeOutExpo'
    },
    delay: 250,
    translateY: {
        value: -50,
        duration: 3000,
        easing: 'easeOutExpo'
      }
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
        value: -50,
        duration: 3000,
        easing: 'easeOutExpo'
      }
  });


})();