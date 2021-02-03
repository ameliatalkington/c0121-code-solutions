var $buttonClick = document.querySelector('.button');
var $closeButton = document.querySelector('.button.close');
var $modalBox = document.querySelector('.modal-box');

function click(event) {
  if ($buttonClick.className === 'button open') {
    $modalBox.className = 'modal-box on';
  }
}

function close(event) {
  if ($closeButton.className === 'button close') {
    $modalBox.className = 'modal-box off';
  }
}

$buttonClick.addEventListener('click', click);
$closeButton.addEventListener('click', close);
