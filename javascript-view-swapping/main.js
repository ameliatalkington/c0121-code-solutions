var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var value of $tabs.values()) {
      if (event.target === value) {
        value.className = 'tab active';
      } else {
        value.className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var values of $view.values()) {
      if (values.getAttribute('data-view') === $dataView) {
        values.className = 'view';
      } else {
        values.className = 'view hidden';
      }
    }
  }
});
