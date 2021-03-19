const express = require('express');
const app = express();
let nextID = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.listen(3000, () => {
  console.log('Listening to Port 3000!');
});

const parsedJSON = express.json();

app.use(parsedJSON);

app.post('/api/grades', (req, res) => {
  req.body.id = nextID;
  grades[nextID] = req.body;
  nextID++;
  res.status(201).send(req.body);
});
