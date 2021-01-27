var num1 = 17;
var num2 = 102;
var num3 = 4;
var maximumValue = Math.max(num1, num2, num3);
console.log('Maximum Value:', maximumValue);

var heroes = ['spiderman', 'batman', 'ironman', 'hulk'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random Index:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'Atlas Shrugged',
    author: 'Ayn Rand'
  },
  {
    title: 'The Great Gatsby',
    author: 'F Scott Fitzgerald'
  },
  {
    title: 'A Farewell to Arms',
    author: 'Ernest Hemingway'
  }
];

var lastBook = library.pop();
console.log('Last Book', lastBook);

var firstBook = library.shift();
console.log('First Book', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

var fullName = 'Amelia Talkington';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
