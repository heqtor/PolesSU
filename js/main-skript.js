$(document).ready(function() {
	var menuToggle = $('#menuToggle'),
		mainMenu = $('#mainMenu'),
		navHead = $('#navHead'),
		varOfFontH = $('#text'),
		varOfFontP = $('#imageHeader p'),
		duwnButton = $('#imageHeader span');

	//МЕТОД ВЫПЛЫВАЮЩЕГО МЕНЮ
	$(menuToggle).on('click', function (e) {
		e.preventDefault();
		mainMenu.slideToggle();
	});
	
	//МЕТОД АВТОМАТИЧЕСКОГО ПОДБОРА ШРИФТА
	function fontSizeMod() {
		var wid = $(window).width();
		var fontSizeH = wid/36;
		var fontSizeP = fontSizeH/3;
		varOfFontH.css("font-size", fontSizeH+"pt");
		varOfFontP.css("font-size", fontSizeP+"pt");
	};
	

	//мотод адаптивизации паралакса
	function adaptedParalax() {
		var imageHeaderHeight = $('#imageHeader').css("height");
		var	paralaxScene = $('#scene').css("max-height", imageHeaderHeight);
		var imgParalax = $('#scene .layer img').css("max-height", imageHeaderHeight);
		var la = null;
	};
	

	//ОПЕРАЦИИ ПРИ ИЗМЕНЕНИИ РАЗМЕРА ОКНА
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 979 && mainMenu.is(":hidden")){
			mainMenu.removeAttr('style');
		}
		fontSizeMod();
		adaptedParalax();
	});

	//вызоав методов
	fontSizeMod();
	adaptedParalax();

	//ЯКОРЬ
	$("#imageHeader").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});

	//ДЕЙСТВИЯ ПРИ НАВЕДЕНИИ НА ФОТО
	(function(){
		 if ($(window).width() >= 992) {
		 	if ($(".mainPhoto span").hasClass("plus")){
		 		$('.mainPhoto span').removeClass("plus");
		 	}
		 	$(".mainPhoto").mouseover(function() {
				var span = $('.mainPhoto span').addClass("plus"),
				link = $('.link').css('display',"block");
			});
			$(".mainPhoto").mouseout(function() {
				var span = $('.mainPhoto span').removeClass("plus"),
					link = $('.link').css('display',"none");
			});	
		 };
	}());
	

	//подбор размера фото и текста слайдера галлереи
	(function(){
		var mainPhoto = $('#rightBlockNews .mainPhoto'),
			mainPhotoHeight = mainPhoto.height(),
			height =  mainPhotoHeight/2+"px",
		    otherPhotoMaxHeight = $('#rightBlockNews .smallPhoto').css({'height':height, 'width':height});
		//РАЗМЕР ГЛАВНОГО ФОТО
		if ($(window).width() < 620){
			var otherPhotoLineOne = $('.otherPhotoLineOne').width();
			mainPhoto.css("width","otherPhotoLineOne");
		}
		//РАЗМЕР ТЕКСТА
		if ($(window).width() > 620 && $(window).width() < 992){
			var mainContainerWhidth = $('.mainContainer').width(),
				nameGalery = $('.photoGallery .nameGalery').css("width",mainContainerWhidth);
		} 
	}());

	(function() {
		if ($(window).width() < 480) {
			$(".nameGaleryProject br").detach();
		};
	}());
});

