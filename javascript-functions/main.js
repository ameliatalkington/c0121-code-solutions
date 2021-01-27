function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var minToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds:', minToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name + '!';
  return greeting;
}

var greetResult = greet('Amelia');
console.log('greet:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(5, 3);
console.log('getArea:', areaResult);

function getFirstName(person) {
  return person.firstName;
}

var firstNameResult = getFirstName({ firstName: 'Amelia', lastName: 'Talkington' });
console.log('getFirstName:', firstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement:', lastElementResult);
