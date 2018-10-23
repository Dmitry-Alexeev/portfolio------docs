$(document).ready(function() {

  	// Закомментировано после переноса if-else в строчки 35-40 
	// var toggle = $("#navigation__button");
	// toggle.on("click", function(e){
	// 	e.preventDefault();
	//  if ( toggle.hasClass("active")) {
	//    toggle.removeClass("active");
	//  } else {
	//    toggle.addClass("active");
	//  }
	// })

	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');
	// var iconNav = 'fa-bars';     //эти иконки мы не используем, удаляем код
	// var iconClose = 'fa-times';

	// Мобильная навигация (отвечает за открытие меню и смена иконки по клику)
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);

		if ( navToggleButton.hasClass("active")) {
			   navToggleButton.removeClass("active");
			 } else {
			   navToggleButton.addClass("active");
			 }

		// if ( navToggleIcon.hasClass(iconNav) ){
		// 	navToggleIcon.removeClass(iconNav);
		// 	navToggleIcon.addClass(iconClose);
		// } else {
		// 	navToggleIcon.removeClass(iconClose);
		// 	navToggleIcon.addClass(iconNav);
		// }
		
	})

	// (отвечает за клин по ссылке в меню, чтобы меню ЗАКРЫЛОСЬ, а иконка стала ГАМБУРГЕРОМ)
	navLink.on('click', function(){

		if ( navBlock.hasClass(navBlockOpen) ) {

			if ( navToggleButton.hasClass("active")) {
			   navToggleButton.removeClass("active");
			 } else {
			   navToggleButton.addClass("active");
			 }

			// if ( navToggleIcon.hasClass(iconNav) ){
			// 	navToggleIcon.removeClass(iconNav);
			// 	navToggleIcon.addClass(iconClose);
			// } else {
			// 	navToggleIcon.removeClass(iconClose);
			// 	navToggleIcon.addClass(iconNav);
			// }
		}

		navBlock.removeClass(navBlockOpen);		
	})


}); 

