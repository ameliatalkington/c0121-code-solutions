var colors = ['red', 'white', 'blue'];
console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);

var sentence = 'America is ' + colors[0] + ', ' + colors[1] + [', '] + colors[2] + ['.'];
console.log(sentence);

colors[2] = 'green';
var sentenceMexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + [', '] + colors[2] + ['.'];
console.log(sentenceMexico);
console.log('Value of colors:', colors);

var students = ['Albert', 'Richard', 'Karen', 'Susan'];
var numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent + '.');
console.log('Value of students:', students);
