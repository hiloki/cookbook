/* jshint devel:true */
console.log('\nMañana venid temprano\nque haremos cosas muy bonitas.\n\nBy Antoni Gaudi\n\n');

!( function(document, window, element) {

  var dHeight			    = 0,
  		wScrollCurrent	= 0;

  window.addEventListener( 'scroll', function(){

  	dHeight			    = document.body.offsetHeight;
  	wScrollCurrent	= window.pageYOffset;

    if ( $(window).scrollTop() >= (dHeight - wScrollCurrent) ) {
      $(element).fadeOut();
    } else {
      $(element).fadeIn();
    }

  });

}( document, window, '.widget__share'));
