const express = require('express');
const path = require('path');
const app = express();

const newPath = path.join(__dirname, 'public');
const files = express.static(newPath);

app.use(files);

app.listen(3000, () => {
  console.log('Listening to Port 3000!');
});
