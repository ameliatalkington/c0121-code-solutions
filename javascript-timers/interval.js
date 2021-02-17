var $h1 = document.querySelector('h1');
var counter = 4;

setInterval(function () {
  if (counter === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  } else if (counter < 0) {
    clearInterval();
  } else {
    $h1.textContent = counter;
  }
  counter--;
}, 1000);
