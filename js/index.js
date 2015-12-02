$(function(){

  var main = function() {

  $('.arrownext').click(function() {
    var currentSlide = $('.active');
    var nextSlide = currentSlide.next();

    if (nextSlide.length == 0) {
      nextSlide = $('.review').first();
    }

    currentSlide.fadeOut(500, function() {
      $(this).removeClass('active');
    })
    nextSlide.fadeIn(500).addClass('active');
    setTimeout(function(){ nextSlide.fadeIn('slow').addClass('active-slide'); }, 300);

  });

  $('.arrowprev').click(function() {
    var currentSlide = $('.active');
    var prevSlide = currentSlide.prev();

    if (prevSlide.length == 0) {
      prevSlide = $('.review').last();
    }

    currentSlide.fadeOut(500).removeClass('active');
    prevSlide.fadeIn(500).addClass('active');
  });
};

$(document).ready(main);

});