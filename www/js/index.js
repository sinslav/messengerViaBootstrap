
// test

for (var i = messages.length - 1; i >= 0; i--) {
	var timeArray = messages[i].created_at.split(' ');  // преобразовал дату в массив разбив по пробелам
	messages[i].created_at = (timeArray[2]+ ' ' + timeArray[1]+ ' ' +  timeArray[4]).toString(); // создал строку с датой в нужном формате для вывода в шаблон
}


$(function() {
	var template = document.getElementById('message-list').innerHTML;
	var data = {
		messages: messages,
		users: users
	};
	$('.dialog').prepend(Mustache.render(template, data));

});


