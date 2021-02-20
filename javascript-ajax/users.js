var $userList = document.querySelector('#user-list');
var xmlr = new XMLHttpRequest();
xmlr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xmlr.responseType = 'json';

xmlr.addEventListener('load', function() {
  console.log(xmlr.status);
  console.log(xmlr.response);

  for (var i = 0; i < xmlr.response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = xmlr.response[i].name;
    $userList.appendChild($li);
  }
});

xmlr.send();
