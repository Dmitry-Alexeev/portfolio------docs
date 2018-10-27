$(document).ready(function(){

    // Создаем переменые для кнопки и для меню
	var pull = $("#navigation__toggle");
	var nav = $(".navigation ul");

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере при клике по сслке, без перескакивания на ссылку
		e.preventDefault();

        // Открываем/Скрываем меню
		$(nav).slideToggle();

		//добавляем модификатор --active
		$(this).toggleClass('navigation__toggle-button--active');
	});


    // При изменении размера окна, в большую сторону, если меню было скрыто, показываем его.
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && nav.is(':hidden')) {
		    nav.removeAttr('style');
		}
	});

	var w = $(window).width();
	if ( w < 992 ) {
		$('nav.navigation a').on("click", function(){
			nav.slideToggle();
		});
	}

	//вызов слайдера
  		$("#top_slider").owlCarousel({
		    singleItem: true,
		    navigation: true,
		    navigationText : ["",""],
		    slideSpeed : 650,
		    autoPlay : 3000,
		    theme: "top_slider_theme"
	    });


	    //slide2id - плавная прокрутка по ссылкам внутри страницы
		$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
		});
		//rel - добавить к ссылке и будет работать
		// .pagescroll -  добавить к ссылке и будет работать


});