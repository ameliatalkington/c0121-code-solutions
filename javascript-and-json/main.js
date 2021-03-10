var books = [
  {
    isbn: '7470055712',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    isbn: '1578214693',
    title: 'A Farewell to Arms',
    author: 'Ernest Hemingway'
  },
  {
    isbn: '3769759853',
    title: 'Atlas Shrugged',
    author: 'Ayn Rand'
  }
];

console.log('Array of Books:', books);
console.log('typeof:', typeof books);

var JSONBooksString = JSON.stringify(books);
console.log('JSON string of array:', JSONBooksString);
console.log('typeof JSONBooksString', typeof JSONBooksString);

var student = '{"numberID":"832934903", "name":"Amelia"}';
console.log('Student string:', student);
console.log('typeof student:', typeof student);
var studentObject = JSON.parse(student);
console.log('studentObject:', studentObject);
console.log('typeof studentObject', typeof studentObject);
