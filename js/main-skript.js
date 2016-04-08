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
	// ПОДБОР ПОЗИЦИИ ТОЧЕК СЛАЙДЕРА СОСТАВА ЛАБОРАТОРИИ
	(function(){
		function Location (imgSlider, loc1, loc2, loc3, loc4) {
			var imageSliderConsist = $(imgSlider),
				imgConsWhidth = imageSliderConsist.width(),
				imgConsMarginPx = imageSliderConsist.css("margin-right"),
				imgConsMargin = Number(imgConsMarginPx.replace(/px/g,""));

			var	point1Loc = (imgConsWhidth)/2 ,
				point2Loc = imgConsWhidth + 30 + point1Loc,
				point3Loc = imgConsWhidth + 30 + point2Loc,
				point4Loc = imgConsWhidth + 30 + point3Loc;
			if(imgSlider === "#activeUser #infoAboutActiveUser"){
				point1Loc = (imgConsWhidth + imgConsMargin)/2 ,
				point2Loc = imgConsWhidth + 15 + imgConsMargin + imgConsMargin + point1Loc,
				point3Loc = imgConsWhidth + 15 + imgConsMargin + imgConsMargin + point2Loc,
				point4Loc = imgConsWhidth + 15 + imgConsMargin + imgConsMargin + point3Loc;
			}
			$(loc1).css("left", point1Loc+"px");
			$(loc2).css("left", point2Loc+"px");
			$(loc3).css("left", point3Loc+"px");
			$(loc4).css("left", point4Loc+"px");
		};

		Location("#consistLab .photoConsistLab","#consistLab .locPoint1","#consistLab .locPoint2",
			"#consistLab .locPoint3","#consistLab .locPoint4");
		Location("#activeUser #infoAboutActiveUser","#activeUser .movePointAbout1","#activeUser .movePointAbout2",
			"#activeUser .movePointAbout3","#activeUser .movePointAbout4");
		

			//НВЕДЕНИЕ НА ПЕРВОЕ ФОТО ИЛИ БЛОКО АКТИВНОГО УЧАСТНИКА
			// ФОТО
			$(".photo1, .locPoint1").mouseover(function(){
				if($(window).width() > 767){
					$("#consistLab .pointToogle .locPoint1").removeClass("pointChoiceDefault");
					$("#consistLab .pointToogle .locPoint1").addClass("pointChoiceActive");
					$("#consistLab .photo1").css("opacity","1");
					$("#consistLab .photo1 .infoAboutUser").removeClass("infoAboutUserVisualOff");
					$("#consistLab .photo1 .infoAboutUser").addClass("infoAboutUserVisualOn");
				}
			});
			$(".photo1, .locPoint1").mouseout(function(){
				if($(window).width() > 767){
					$("#consistLab .pointToogle .locPoint1").removeClass("pointChoiceActive");
					$("#consistLab .pointToogle .locPoint1").addClass("pointChoiceDefault");
					$("#consistLab .photo1").css("opacity","0.7");
					$("#consistLab .photo1 .infoAboutUser").removeClass("infoAboutUserVisualOn");
					$("#consistLab .photo1 .infoAboutUser").addClass("infoAboutUserVisualOff");
				}	
			});
			// АКТИВНЫЙ УЧАСТНИК
			$(".movePointAbout1").mouseover(function(){
				if($(window).width() > 991){
					$("#activeUser .pointToogle .movePointAbout1").removeClass("pointChoiceDefault");
					$("#activeUser .pointToogle .movePointAbout1").addClass("pointChoiceActive");
					$("#activeUser .moveAbout1").addClass("boxShowAboutActiveUser");
				}
			});
			$(".movePointAbout1").mouseout(function(){
				if($(window).width() > 991){
					$("#activeUser .pointToogle .movePointAbout1").removeClass("pointChoiceActive");
					$("#activeUser .pointToogle .movePointAbout1").addClass("pointChoiceDefault");
					$("#activeUser .moveAbout1").removeClass("boxShowAboutActiveUser");
				}
			});
			//НАВЕДЕНИЕ НА ВТОРОЕ ФОТО ИЛИ БЛОКО АКТИВНОГО УЧАСТНИКА
			// ФОТО
			$(".photo2, .locPoint2").mouseover(function(){
				if($(window).width() > 767){	
					$("#consistLab .pointToogle .locPoint2").removeClass("pointChoiceDefault");
					$("#consistLab .pointToogle .locPoint2").addClass("pointChoiceActive");
					$("#consistLab .photo2").css("opacity","1");
					$("#consistLab .photo2 .infoAboutUser").removeClass("infoAboutUserVisualOff");
					$("#consistLab .photo2 .infoAboutUser").addClass("infoAboutUserVisualOn");
				}
			});
			$(".photo2, .locPoint2").mouseout(function(){
				if($(window).width() > 767){
					$("#consistLab .pointToogle .locPoint2").removeClass("pointChoiceActive");
					$("#consistLab .pointToogle .locPoint2").addClass("pointChoiceDefault");
					$("#consistLab .photo2").css("opacity","0.7");
					$("#consistLab .photo2 .infoAboutUser").removeClass("infoAboutUserVisualOn");
					$("#consistLab .photo2 .infoAboutUser").addClass("infoAboutUserVisualOff");
				}	
			});
			// АКТИВНЫЙ УЧАСТНИК
			$(".movePointAbout2").mouseover(function(){
				if($(window).width() > 991){
					$("#activeUser .pointToogle .movePointAbout2").removeClass("pointChoiceDefault");
					$("#activeUser .pointToogle .movePointAbout2").addClass("pointChoiceActive");
					$("#activeUser .moveAbout2").addClass("boxShowAboutActiveUser");
				}
			});
			$(".movePointAbout2").mouseout(function(){
				if($(window).width() > 991){
					$("#activeUser .pointToogle .movePointAbout2").removeClass("pointChoiceActive");
					$("#activeUser .pointToogle .movePointAbout2").addClass("pointChoiceDefault");
					$("#activeUser .moveAbout2").removeClass("boxShowAboutActiveUser");
				}
			});
			//НАВЕДЕНИЕ НА ТРЕТЬЕ ФОТО ИЛИ БЛОКО АКТИВНОГО УЧАСТНИКА
			// ФОТО
			$(".photo3, .locPoint3").mouseover(function(){
				if($(window).width() > 767){
					$("#consistLab .pointToogle .locPoint3").removeClass("pointChoiceDefault");
					$("#consistLab .pointToogle .locPoint3").addClass("pointChoiceActive");
					$("#consistLab .photo3").css("opacity","1");
					$("#consistLab .photo3 .infoAboutUser").removeClass("infoAboutUserVisualOff");
					$("#consistLab .photo3 .infoAboutUser").addClass("infoAboutUserVisualOn");
				}				
			});
			$(".photo3, .locPoint3").mouseout(function(){
				if($(window).width() > 767){
					$("#consistLab .pointToogle .locPoint3").removeClass("pointChoiceActive");
					$("#consistLab .pointToogle .locPoint3").addClass("pointChoiceDefault");
					$("#consistLab .photo3").css("opacity","0.7");
					$("#consistLab .photo3 .infoAboutUser").removeClass("infoAboutUserVisualOn");
					$("#consistLab .photo3 .infoAboutUser").addClass("infoAboutUserVisualOff");
				}		
			});
			// АКТИВНЫЙ УЧАСТНИК
			$(".movePointAbout3").mouseover(function(){
				if($(window).width() > 991){
					$("#activeUser .pointToogle .movePointAbout3").removeClass("pointChoiceDefault");
					$("#activeUser .pointToogle .movePointAbout3").addClass("pointChoiceActive");
					$("#activeUser .moveAbout3").addClass("boxShowAboutActiveUser");
				}
			});
			$(".movePointAbout3").mouseout(function(){
				if($(window).width() > 991){
					$("#activeUser .pointToogle .movePointAbout3").removeClass("pointChoiceActive");
					$("#activeUser .pointToogle .movePointAbout3").addClass("pointChoiceDefault");
					$("#activeUser .moveAbout3").removeClass("boxShowAboutActiveUser");
				}
			});
			//НАВЕДЕНИЕ НА ЧЕТВЁРТОЕ ФОТО ИЛИ БЛОКО АКТИВНОГО УЧАСТНИКА
			// ФОТО
			$(".photo4, .locPoint4").mouseover(function(){
				if($(window).width() > 767){
					$("#consistLab .pointToogle .locPoint4").removeClass("pointChoiceDefault");
					$("#consistLab .pointToogle .locPoint4").addClass("pointChoiceActive");
					$("#consistLab .photo4").css("opacity","1");
					$("#consistLab .photo4 .infoAboutUser").removeClass("infoAboutUserVisualOff");
					$("#consistLab .photo4 .infoAboutUser").addClass("infoAboutUserVisualOn");
				}
			});
			$(".photo4, .locPoint4").mouseout(function(){
				if($(window).width() > 767){		
					$("#consistLab .pointToogle .locPoint4").removeClass("pointChoiceActive");
					$("#consistLab .pointToogle .locPoint4").addClass("pointChoiceDefault");
					$("#consistLab .photo4").css("opacity","0.7");
					$("#consistLab .photo4 .infoAboutUser").removeClass("infoAboutUserVisualOn");
					$("#consistLab .photo4 .infoAboutUser").addClass("infoAboutUserVisualOff");
				}
			});
			// АКТИВНЫЙ УЧАСТНИК
			$(".movePointAbout4").mouseover(function(){
				if($(window).width() > 991){
					$("#activeUser .pointToogle .movePointAbout4").removeClass("pointChoiceDefault");
					$("#activeUser .pointToogle .movePointAbout4").addClass("pointChoiceActive");
					$("#activeUser .moveAbout4").addClass("boxShowAboutActiveUser");
				}
			});
			$(".movePointAbout4").mouseout(function(){
				if($(window).width() > 991){
					$("#activeUser .pointToogle .movePointAbout4").removeClass("pointChoiceActive");
					$("#activeUser .pointToogle .movePointAbout4").addClass("pointChoiceDefault");
					$("#activeUser .moveAbout4").removeClass("boxShowAboutActiveUser");
				}
			});
	}());
});

