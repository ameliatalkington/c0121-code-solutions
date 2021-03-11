const fs = require('fs');

const copiedFile = './' + process.argv[2];
const newFile = process.argv[3];

fs.readFile(copiedFile, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(newFile, data, 'utf8', (err) => {
    if (err) throw err;
  });
});
