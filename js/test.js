
window.onload = function()
{

	console.log('Начинаем обработку');
	setTimeout(add, 2000);
	// находимся на странице с темами
	if (document.location.pathname.indexOf('/Prepare/Content/ShowThemes/') == 0)
	{
		// просто выведем список тем в консоль, потом подумаем как можно проходится по всем темам сразу
		$(".table table").find('.theme-name').each(function()
		{
			console.log($(this).html());
		});
	}

	//function handler() {
		// находимся на странице с вопросами
		if (document.location.pathname.indexOf('/Prepare/Content/ShowThemeQuestions') == 0) {
				$('.page-link').click();
				var questions = $('.question-text');
				console.log($('app-root').find('player').find('question'));
				//var questions = $(".body").find("table").find("td.actions a.icon-info");
				//var next = $(".links").find('a').last().text();

				// доделать выбор всех страниц

				console.log(123);

				for (var i = 0; i < questions.length; i++) {
					var item = questions[i];
					(function (i) {
						window.setTimeout(function () {
							//console.log(i);
							questions[i].click();
							//console.log($('.radio-group-container'));

						}, i * 4000);
					}(i));

					if (i == 0) {
						return false;
					}
				}

				/*var	items_length = questions.length;
                var i = 0;

                questions.click(function(e){
                    e.preventDefault();
                    console.log($(this));
                });

                setInterval(function(){
                    if(i == items_length) {
                        i = 0
                    }
                    questions.eq(i).click();
                    //i++

                }, 2000)




                //---------------------------------------

                //console.log(actions);
                //var tags = document.querySelectorAll(".block script")
                /*for (var i = 0; i < childrens.length; i++) {
                    var item = childrens[i];
                    console.log(item);
                }*/

				/*childrens.forEach(function( child ){
                    console.log(child);
                });*/

				//console.log(); // выведет в консоли "Тестовая страница"
				//console.log(JSON.stringify(tags[tags.length - 1].textContent, null, 4));
				//console.log(viewModel);
				//console.log(cell);
				// обновляем станицу
				/*setTimeout(function(){
                    location.reload();
                }, 1000);*/

				/*var http = new XMLHttpRequest();
                http.open('GET', document.location.href, true);  // составить асинхронный (по умолчанию true) GET запрос страницы
                http.onreadystatechange = function () {  // обратная связь: отдаёт ответ на запрос
                    if (this.readyState == 4 && this.status == 200) {  // отследить момент, когда пришёл полный ответ
                        console.log( this.responseText );  // this.responseText — ответ в виде текста
                    }
                }
                http.send();  // отправить запрос*!/*/

				//console.log($(".body").find("table").find("td"));
			}
	//}
}

function add()
{
	$("body").append("<div class='btn_no_view_popup' style='background: #009a1a;position: absolute;z-index: 9999999999999;color: white;padding: 10px;right: 31px;top: 83px;width: 250px;'><center>Чудо парсер</center><div class='recount' style='margin-top:25px;'></div><a style='color:white;' href='#' onClick='run();return false;' id=''>Запуск сбора вопросов</a></div>");
}