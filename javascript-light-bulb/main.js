var $circleClick = document.querySelector('.circle');
var $background = document.querySelector('.background');
var userClicks = 0;

function clicks(event) {
  if (userClicks % 2 === 0) {
    $circleClick.className = 'circle dark';
    $background.className = 'background dark';
  } else {
    $circleClick.className = 'circle sun';
    $background.className = 'background light';
  }
  userClicks++;
}

$circleClick.addEventListener('click', clicks);
