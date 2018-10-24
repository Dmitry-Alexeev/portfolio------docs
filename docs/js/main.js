$(document).ready(function() {

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
	
	// MixItUp - фильтрация работ в портфолио
	$('#filter_container').mixItUp();

	// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery

	// Валидация
	$('#contact-form').validate({
		//что валидируем
		rules:{
			name: { required:true},
			email: { required:true , email:true},
			message: { required:true},
		},

		//сообщения
		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required:"Пожалуйста, введите свой E-mail",
				email:"Email должен быть в формате name@domain.com. Возможно, вы ввели email с ошибкой",
			},
			message: "Пожалуйста, введите текст сообщения",
		},

		//что делаем с формой, когда она провалидирована
		submitHandler: function(form) {
			ajaxFormSubmit();
		}

	});

	// функция ajax запроса на сервер
	function ajaxFormSubmit (){
		var string = $('#contact-form').serialize();

		$.ajax({
			type: "POST", //POSTом
			url: "php/mail.php", // отправляет запрос на рнр
			data: string, //какие данные отправляем (строчные?)

			success: function(html){
				$('#contact-form').slideUp(800); //сворачиваем форму
				$('#answer').html(html); //показываем ответ
			}
		});

		return false;
	}

});
