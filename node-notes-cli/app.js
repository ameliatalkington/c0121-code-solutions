const fs = require('fs');
const dataObject = require('./data.json');

const userMethod = process.argv[2];
const userInput = process.argv[3];
const updatedString = process.argv[4];

if (userMethod === 'read') {
  for (let keys in dataObject.notes) {
    console.log(`${keys}: ${dataObject.notes[keys]}`);
  }
} else if (userMethod === 'create') {
  dataObject.notes[dataObject.nextId] = userInput;
  dataObject.nextId++;
  const newDataFile = JSON.stringify(dataObject, null, 2);
  fs.writeFile('./data.json', newDataFile, 'utf8', err => {
    if (err) throw err;
  });
} else if (userMethod === 'delete') {
  delete dataObject.notes[userInput];
  const deletedData = JSON.stringify(dataObject, null, 2);
  fs.writeFile('./data.json', deletedData, 'utf8', err => {
    if (err) throw err;
  });
} else if (userMethod === 'update') {
  dataObject.notes[userInput] = updatedString;
  const updatedData = JSON.stringify(dataObject, null, 2);
  fs.writeFile('./data.json', updatedData, 'utf8', err => {
    if (err) throw err;
  });
} else {
  console.log('Data input was not valid please try again.');
}
