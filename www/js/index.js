$(function() {
  var template = document.getElementById('message-list').innerHTML;
  var data = {
  	messages: messages,
  	users: users
  };
  $(".dialog").prepend(Mustache.render(template, data));
  
});