var $buttonClick = document.querySelector('.button');
var $modalBox = document.querySelector('.modal-box');

function click(event) {
  if ($buttonClick.className === 'button open') {
    $modalBox.className = 'modal-box on';
  } else if ($buttonClick.className === 'button close') {
    $modalBox.className = 'modal-box off';
  }
}

$buttonClick.addEventListener('click', click);
