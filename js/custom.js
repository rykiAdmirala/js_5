$(function() {

	// Slider
	$('.pretty-carousel').bxSlider({
	  minSlides: 2,
	  maxSlides: 2,
	  moveSlides: 1,
	  slideWidth: 400,
	  slideMargin: 10
	});

  lightbox.option({
    'resizeDuration': 300
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


// Making incredible and TOTALLY unnecessary animation of submenu
function subMenuInit() {

  var bgColor = ['#5f43a2', '#aa41ad', '#c53573'];
  var $parentMenuEl = $('.sub-menu').parent().addClass('parent');

  $parentMenuEl.each(function(i) {
    var $subMenu = $(this).find('.sub-menu').eq(0);


    // Storing chars of every submenu before .hover()
    // Show\Hide of _all_ submenus are necessary for correct calculations
    $('.sub-menu').show();
      if (i > 0) {
      /* If nesting level is 2 or higher, we
      1. display submenu at the right side of parent menu item
      2. setting the bg the same as parent submenu */
        var parentWidth = $(this).width();
        $subMenu.css({
          'left' : parentWidth,
          'background-color' : bgColor[i-1]
        });
      }
      var subMenuHeight = $subMenu.outerHeight();
      var subMenuWidth = $subMenu.outerWidth();
      var subMenuInitBgColor = $subMenu.css('background-color');
    $('.sub-menu').hide();


    $(this).hover(
      function()
      {
        $(this).addClass('opened');

        $subMenu
          .stop()
          .css({
            // Resetting initial values for proper animation
            'min-width' : 'initial',
            'width' : '0',
            'height' : '0',
            'display':'block'
          })
          .animate({
            'width' : subMenuWidth,
            'height' : subMenuHeight,
            'background-color' : bgColor[i]
          }, 1000, 'easeOutBounce');

      }, function()
      {
        $(this).removeClass('opened');

        $subMenu
          .stop()
          .animate({
            'width' : '0',
            'height' : '0',
            'background-color' : subMenuInitBgColor
            }, 1000, 'easeOutBack', function() {
              $(this).css({
                // Returning values to its initial state
                'display' : 'none',
                'height' : subMenuHeight,
                'width' : subMenuWidth,
              });
          });          
      }
    );
  });
}