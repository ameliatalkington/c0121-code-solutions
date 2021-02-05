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

var JSONReverted = JSON.parse(JSONBooksString);
console.log('Parsed JSON String:', JSONReverted);
console.log('typeof JSONReverted:', typeof JSONReverted);
