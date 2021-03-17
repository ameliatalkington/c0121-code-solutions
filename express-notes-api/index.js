const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();
const errorObject = {
  error: ''
};

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (entry in data.notes) {
    dataArray.push(data.notes[entry]);
  }
  res.json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0) {
    errorObject.error = 'id must be a positive integer';
    res.status(400).json(errorObject);
  } else if (!data.notes[id]) {
    errorObject.error = `cannot find note with id ${id}`;
    res.status(404).json(errorObject);
  } else {
    res.status(200).json(data.notes[id]);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0) {
    errorObject.error = 'id must be a positive integer';
    res.status(400).json(errorObject);
  } else if (!data.notes[id]) {
    errorObject.error = `cannot find note with id ${id}`
    res.status(404).json(errorObject);
  } else {
    delete data.notes[id];
    const dataString = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataString, 'utf8', err => {
      if (err) {
        errorObject.error = 'an unexpected error occured.'
        res.status(500).send(errorObject);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

const parsedJSON = express.json();
app.use(parsedJSON);

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    errorObject.error = 'content is a required field';
    res.status(400).json(errorObject);
  } else {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    const newEntry = data.notes[data.nextId];
    data.nextId++;
    const dataString = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataString, 'utf8', err => {
      if (err) {
        errorObject.error = 'an unexpected error occured.'
        res.status(500).send(errorObject);
      } else {
        res.status(201).send(newEntry);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!req.body.content) {
    errorObject.error = 'content is a required field';
    res.status(400).json(errorObject);
  } else if( id < 0) {
    errorObject.error = 'id must be a positive integer';
    res.status(400).json(errorObject);
  } else if (!data.notes[id]) {
  errorObject.error = `cannot find note with id ${id}`
  res.status(404).json(errorObject);
  } else {
    data.notes[id].content = req.body.content;
    const newEntry = data.notes[id];
    const dataString = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataString, 'utf8', err => {
      if (err) {
        errorObject.error = 'an unexpected error occured.'
        res.status(500).send(errorObject);
      } else {
        res.status(201).send(newEntry);
      }
    });
  }
});

app.listen(3000, () => {
  console.log('Listening to Port 3000!');
});
