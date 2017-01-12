$(function() {

	// Slider
	$('.pretty-carousel').bxSlider({
	  minSlides: 2,
	  maxSlides: 2,
	  moveSlides: 1,
	  slideWidth: 400,
	  slideMargin: 10
	});

  //Select
  $('.pretty-select').selectBox();

	//Checkboxes
	$(".pretty-check").mousedown(function() {
	  changeCheck($(this));    
	});
	$(".pretty-check").each(function() {       
	  changeCheckStart($(this));
	});
	

  subMenuInit();


});

function changeCheck(el) {
  var el = el,
      input = el.find("input").eq(0);
      
  if(!input.attr("checked")) {
    el.css("background-position","0 -17px");  
    input.attr("checked", true)
  } else {
    el.css("background-position","0 0");  
    input.attr("checked", false)
  }
    return true;
}

function changeCheckStart(el) {
var el = el,
    input = el.find("input").eq(0);

  if(input.attr("checked")) {
    el.css("background-position","0 -17px");  
  }
  return true;
}


function subMenuInit() {
  var $parentMenuEl = $('.menu li');

  $parentMenuEl
    .has('.sub-menu')
    .addClass('parent')
    .hover(function() {
      var $subMenu = $(this).find('.sub-menu').eq(0);

      if ( $(this).parent('.sub-menu').length ) {

        var $parentWidth = $(this).outerWidth();
        
        $subMenu.css('left', $parentWidth);

      }

      $subMenu
        .stop()
        .slideToggle(700, 'easeOutBounce');
    });


}