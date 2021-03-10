var $form = document.querySelector('#contact-form');

function submitForm(event) {
  event.preventDefault();
  var newObject = {};
  newObject.name = $form.elements.name.value;
  newObject.email = $form.elements.email.value;
  newObject.message = $form.elements.message.value;
  console.log('message data:', newObject);
  $form.reset();
}

$form.addEventListener('submit', submitForm);
