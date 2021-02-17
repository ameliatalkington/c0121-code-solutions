var $pokemon = document.querySelector('.pokemon');
var $dots = document.querySelectorAll('.dot');
var $container = document.querySelector('.container');
var $rightButton = document.querySelector('.button-right');
var $leftButton = document.querySelector('.button-left');
var clicks = 0;

var images = [
  {
    src: 'images/001.png',
    alt: '001'
  },
  {
    src: 'images/004.png',
    alt: '004'
  },
  {
    src: 'images/007.png',
    alt: '007'
  },
  {
    src: 'images/025.png',
    alt: '025'
  },
  {
    src: 'images/039.png',
    alt: '039'
  }
];

var interval = setInterval(startLoop, 3000);

function startLoop() {
  clicks++;
  if (clicks > 4) {
    clicks = 0;
  }
  $pokemon.setAttribute('src', images[clicks].src);
  for (var i = 0; i < $dots.length; i++) {
    if (i === clicks) {
      $dots[i].className = 'fas fa-circle dot';
    } else {
      $dots[i].className = 'far fa-circle dot';
    }
  }
}

$container.addEventListener('click', function () {
  clearInterval(interval);
  if (event.target === $rightButton) {
    clicks++;
    if (clicks > 4) {
      clicks = 0;
    }
  }
  if (event.target === $leftButton) {
    clicks--;
    if (clicks < 0) {
      clicks = 4;
    }
  }
  for (var j = 0; j < $dots.length; j++) {
    if (event.target === $dots[j]) {
      clicks = j;
    }
  }
  $pokemon.setAttribute('src', images[clicks].src);
  for (var i = 0; i < $dots.length; i++) {
    if (i === clicks) {
      $dots[i].className = 'fas fa-circle dot';
    } else {
      $dots[i].className = 'far fa-circle dot';
    }
  }
  interval = setInterval(startLoop, 3000);
});
