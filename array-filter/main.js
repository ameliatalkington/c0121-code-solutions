const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(divisibleByTwo);
console.log(evenNumbers);

const overFive = numbers.filter(biggerThanFive);
console.log(overFive);

const startWithE = names.filter(firstLetterE);
console.log(startWithE);

const haveD = names.filter(containLetterD);
console.log(haveD);

function divisibleByTwo(number) {
  if (number !== 0 && number % 2 === 0) {
    return true;
  }
}

function biggerThanFive(number) {
  if (number > 5) {
    return true;
  }
}

function firstLetterE(name) {
  if (name.charAt(0) === 'E') {
    return true;
  }
}

function containLetterD(name) {
  if (name.includes('d') || name.includes('D')) {
    return true;
  }
}
