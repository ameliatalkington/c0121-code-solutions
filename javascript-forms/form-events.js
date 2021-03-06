function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
}

var $inputArray = document.querySelectorAll('input');
var $inputName = $inputArray[0];
var $inputEmail = $inputArray[1];
var $textcontent = document.querySelector('textarea');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$textcontent.addEventListener('focus', handleFocus);
$textcontent.addEventListener('blur', handleBlur);
$textcontent.addEventListener('input', handleInput);
