let count = 3;

const interval = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else if (count === 0) {
    console.log('Blast off!');
    count--;
  } else {
    clearInterval(interval);
  }
}, 1000);
