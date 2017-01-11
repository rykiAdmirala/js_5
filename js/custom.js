$(function() {

	// Slider
	$('.pretty-carousel').bxSlider({
	  minSlides: 2,
	  maxSlides: 2,
	  moveSlides: 1,
	  slideWidth: 400,
	  slideMargin: 10
	});

	//Checkboxes
	$(".pretty-check").mousedown(function() {
	  changeCheck($(this));    
	});
	$(".pretty-check").each(function() {       
	  changeCheckStart($(this));
	});
	




});

function changeCheck(el)
/* 
  функция смены вида и значения чекбокса
  el - span контейнер дял обычного чекбокса
  input - чекбокс
*/
{
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

function changeCheckStart(el)
/* 
  если установлен атрибут checked, меняем вид чекбокса
*/
{
var el = el,
    input = el.find("input").eq(0);

  if(input.attr("checked")) {
    el.css("background-position","0 -17px");  
  }
  return true;
}