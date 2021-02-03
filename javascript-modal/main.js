var $buttonClick = document.querySelectorAll('.button');
var $buttonOpen = $buttonClick[0];
var $buttonClose = $buttonClick[1];
var $closeButton = document.querySelector('.button.close');
var $modalBox = document.querySelector('.modal-box');
var isOpen = false;

function click(event) {
  if ($buttonOpen.className === 'button open') {
    $modalBox.className = 'modal-box on';
    isOpen = true;
  }
  if ($buttonClick.className === 'button close') {
    $modalBox.className = 'modal-box off';
    isOpen = false;
  }

  if (isOpen === false) {
    $buttonClick.className = 'button open';
  } else {
    $buttonClick = $closeButton;
  }
}

$buttonClick.addEventListener('click', click);
