
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

	// находимся на странице с вопросами
	if (document.location.pathname.indexOf('/Prepare/Content/ShowThemeQuestions') == 0)
	{
		var actions = $(".body").find("table").find("td");
		var tags = document.querySelectorAll(".block script")
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


	}
}