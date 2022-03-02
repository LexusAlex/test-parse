window.onload = function()
{
	
	console.log('Начинаем обработку');

	// находимся на странице с темами
	if (document.location.pathname.indexOf('/Prepare/Content/ShowThemes/') == 0)
	{
		// просто выведем список тем в консоль, потом подумаем как можно проходится по всем темам сразу
		$("#themes-table").find('a').each(function()
		{
			//console.log($(this).html());
		});
	}
	// находимся на странице с вопросами
	if (document.location.pathname.indexOf('/Prepare/Content/ShowThemeQuestions') == 0)
	{
		var actions = $(".body").find("table").find("td.actions");

		//console.log(actions);
		// обновляем станицу
		/*setTimeout(function(){
			location.reload();
		}, 1000);*/
	}

	
}