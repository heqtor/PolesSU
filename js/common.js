$(document).ready(function() {
	
////////Релиз версия 1.1 плавное появления и исчезновение при наведении на к ружок///////////
	//////////Левая часть/////////
$('.krygLeft').hover(function(){
       $('.krygItLeft').fadeIn(1000);
}); 
$('.krygLeft').hover(function(){		          $('.textUnderLeft').fadeOut();
 });
$('.krygLeft').hover(function(){
	    $('.jqHoverLeft').fadeIn(2000);
    });
$('.krygCenter').hover(function() {
	$(".krygHovLeft").fadeOut();
});
$('.krygCenter').hover(function() {
		$('.krygItLeft').fadeOut();
});
$('.krygCenter').hover(function() {
		$('.textUnderLeft').slideDown();
});
$('.krygCenter').hover(function() {
		$('.jqHoverLeft').fadeOut();
});
$('.krygRight').hover(function() {
	$(".krygHovLeft").fadeOut();
});
$('.krygRight').hover(function() {
		$('.krygItLeft').fadeOut();
});
$('.krygRight').hover(function() {
		$('.textUnderLeft').slideDown();
});
$('.krygRight').hover(function() {
		$('.jqHoverLeft').fadeOut();
});
////////////Центр///////////////////	
$('.krygCenter').hover(function(){
       $('.krygItCenter').fadeIn(1000);
}); 
$('.krygCenter').hover(function(){		          $('.textUnderCenter').fadeOut();
 });
$('.krygCenter').hover(function(){
	    $('.jqHoverCenter').fadeIn(2000);
    });
$('.krygLeft').hover(function() {
	$(".krygHovCenter").fadeOut();
});
$('.krygLeft').hover(function() {
		$('.krygItCenter').fadeOut();
});
$('.krygLeft').hover(function() {
		$('.textUnderCenter').slideDown();
});
$('.krygLeft').hover(function() {
		$('.jqHoverCenter').fadeOut();
});	
$('.krygRight').hover(function() {
	$(".krygHovCenter").fadeOut();
});
$('.krygRight').hover(function() {
		$('.krygItCenter').fadeOut();
});
$('.krygRight').hover(function() {
		$('.textUnderCenter').slideDown();
});
$('.krygRight').hover(function() {
		$('.jqHoverCenter').fadeOut();
});	
/////////////Правая часть//////////////////////////
$('.krygRight').hover(function(){
       $('.krygItRight').fadeIn(1000);
}); 
$('.krygRight').hover(function(){		          $('.textUnderRight').fadeOut();
 });
$('.krygRight').hover(function(){
	    $('.jqHoverRight').fadeIn(2000);
 });
$('.krygLeft').hover(function() {
	$(".krygHovRight").fadeOut();
});
$('.krygLeft').hover(function() {
		$('.krygItRight').fadeOut();
});
$('.krygLeft').hover(function() {
		$('.textUnderRight').slideDown();
});
$('.krygLeft').hover(function() {
		$('.jqHoverRight').fadeOut();
});
$('.krygCenter').hover(function() {
	$(".krygHovRight").fadeOut();
});
$('.krygCenter').hover(function() {
		$('.krygItRight').fadeOut();
});
$('.krygCenter').hover(function() {
		$('.textUnderRight').slideDown();
});
$('.krygCenter').hover(function() {
		$('.jqHoverRight').fadeOut();
});
	
});

/*bxslider настройки для блока how*/
$(document).ready(function() {
  $('.bxsliderOne').bxSlider({
  auto: true,
  speed: 1000,
  pause: 4000,
  controls: false,
  touchEnabled: true,
  autoHover: true,
  autoControls: false
});
	
});
$(document).ready(function(){
  $('.bxslider').bxSlider({
  mode: 'fade',
  auto: true,
  speed: 1000,
  pause: 4000,
  controls: false,
  touchEnabled: true,
  autoHover: true,
  autoControls: false 
  });
});
/*слайдер в контейнере how*/
//	////Круг1 ////
//$('.krygSliderOne').hover(function(){
//       $('.interestingTextOne').fadeIn(1000);
//}); 
//$('.krygSliderTwo').hover(function() {
//		$('.interestingTextOne').fadeOut();
//});
//	$('.krygSliderThree').hover(function() {
//		$('.interestingTextOne').fadeOut();
//});
//	$('.krygSliderFour').hover(function() {
//		$('.interestingTextOne').fadeOut();
//});
//	////Круг 2 ////
//	$('.krygSliderTwo').hover(function(){
//       $('.interestingTextTwo').fadeIn(1000);
//}); 
//$('.krygSliderOne').hover(function() {
//		$('.interestingTextTwo').fadeOut();
//});
//	$('.krygSliderThree').hover(function() {
//		$('.interestingTextTwo').fadeOut();
//});
//	$('.krygSliderFour').hover(function() {
//		$('.interestingTextTwo').fadeOut();
//});
//	////Круг 3 ////
//	$('.krygSliderThree').hover(function(){
//       $('.interestingTextThree').fadeIn(1000);
//}); 
//$('.krygSliderTwo').hover(function() {
//		$('.interestingTextThree').fadeOut();
//});
//	$('.krygSliderOne').hover(function() {
//		$('.interestingTextThree').fadeOut();
//});
//	$('.krygSliderFour').hover(function() {
//		$('.interestingTextThree').fadeOut();
//});
//////Круг4 ////
//	$('.krygSliderFour').hover(function(){
//       $('.interestingTextFour').fadeIn(1000);
//}); 
//$('.krygSliderTwo').hover(function() {
//		$('.interestingTextFour').fadeOut();
//});
//	$('.krygSliderThree').hover(function() {
//		$('.interestingTextFour').fadeOut();
//});
//	$('.krygSliderOne').hover(function() {
//		$('.interestingTextFour').fadeOut();
//});
	
/*Слайдер для блока howCite*/
	


/////////////Конец///////////////	

////	//Таймер обратного отсчета
////	//Документация: http://keith-wood.name/countdown.html
////	//<div class="countdown" date-time="2015-01-07"></div>
//////	var austDay = new Date($(".countdown").attr("date-time"));
//////	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});
////
////	//Попап менеджер FancyBox
////	//Документация: http://fancybox.net/howto
////	//<a class="fancybox"><img src="image.jpg" /></a>
////	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
////	$(".fancybox").fancybox();
////
////	//Навигация по Landing Page
////	//$(".top_mnu") - это верхняя панель со ссылками.
////	//Ссылки вида <a href="#contacts">Контакты</a>
////	$(".top_mnu").navigation();
////
////	//Добавляет классы дочерним блокам .block для анимации
////	//Документация: http://imakewebthings.com/jquery-waypoints/
////	$(".block").waypoint(function(direction) {
////		if (direction === "down") {
////			$(".class").addClass("active");
////		} else if (direction === "up") {
////			$(".class").removeClass("deactive");
////		};
////	}, {offset: 100});
////
////	//Плавный скролл до блока .div по клику на .scroll
////	//Документация: https://github.com/flesler/jquery.scrollTo
////	$("a.scroll").click(function() {
////		$.scrollTo($(".div"), 800, {
////			offset: -90
////		});
////	});
////
////	//Каруселька
////	//Документация: http://owlgraphic.com/owlcarousel/
////	var owl = $(".carousel");
////	owl.owlCarousel({
////		items : 4
////	});
////	owl.on("mousewheel", ".owl-wrapper", function (e) {
////		if (e.deltaY > 0) {
////			owl.trigger("owl.prev");
////		} else {
////			owl.trigger("owl.next");
////		}
////		e.preventDefault();
////	});
////	$(".next_button").click(function(){
////		owl.trigger("owl.next");
////	});
////	$(".prev_button").click(function(){
////		owl.trigger("owl.prev");
////	});
////
////	//Кнопка "Наверх"
////	//Документация:
////	//http://api.jquery.com/scrolltop/
////	//http://api.jquery.com/animate/
////	$("#top").click(function () {
////		$("body, html").animate({
////			scrollTop: 0
////		}, 800);
////		return false;
////	});
////	
////	//Аякс отправка форм
////	//Документация: http://api.jquery.com/jquery.ajax/
////	$("form").submit(function() {
////		$.ajax({
////			type: "GET",
////			url: "mail.php",
////			data: $("form").serialize()
////		}).done(function() {
////			alert("Спасибо за заявку!");
////			setTimeout(function() {
////				$.fancybox.close();
////			}, 1000);
////		});
////		return false;
////	});
////
