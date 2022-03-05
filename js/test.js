
window.onload = function()
{

	console.log('Начинаем обработку');

	// находимся на странице с темами
	if (document.location.pathname.indexOf('/Prepare/Content/ShowThemes/') == 0)
	{
		// просто выведем список тем в консоль, потом подумаем как можно проходится по всем темам сразу
		$("#themes-table").find('a').each(function()
		{
			console.log($(this).html());
		});
	}

	//function handler() {
		// находимся на странице с вопросами
		if (document.location.pathname.indexOf('/Prepare/Content/ShowThemeQuestions') == 0) {

			var questions = $(".body").find("table").find("td.actions a.icon-info");

			/*questions.first().click(function(){
				console.log(123);
			});*/

			/*questions.each(function(i, e)
			{
				console.log(e.click());

			});*/
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