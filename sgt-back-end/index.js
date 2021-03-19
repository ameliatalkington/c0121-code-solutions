const express = require('express');
const pg = require('pg');

const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

//returns all rows from the "grades" table. The client should
//receive an array of objects. If there happens to be no rows, an empty array is ok.
app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows)
    })
    .catch(err => {
      console.err(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

const parsedJSON = express.json();
app.use(parsedJSON);

app.post('/api/grades', (req, res, next) => {
  const newInput = [
    req.body.name,
    req.body.course,
    req.body.score,
  ];
  if (!newInput[0]) {
    res.status(400).json({
      error: '"name" is a required field'
    });
    return;
  }
  if (!newInput[1]) {
    res.status(400).json({
      error: '"course" is a required field'
    });
    return;
  }
  if (!newInput[2] || newInput[2] < 1 || newInput[2] > 100) {
    res.status(400).json({
      error: '"score" is a required field and must be between 1-100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  db.query(sql, newInput)
    .then(result => {
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10)
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const newInput = [
    req.body.name,
    req.body.course,
    req.body.score,
    gradeId
  ];
  if (!newInput[0]) {
    res.status(400).json({
      error: '"name" is a required field'
    });
    return;
  }
  if (!newInput[1]) {
    res.status(400).json({
      error: '"course" is a required field'
    });
    return;
  }
  if (!newInput[2] || newInput[2] < 1 || newInput[2] > 100) {
    res.status(400).json({
      error: '"score" is a required field and must be between 1-100'
    });
    return;
  }
  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *
  `;
  db.query(sql, newInput)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {

    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
    select *
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
       res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        const sql2 = `
          delete from "grades"
          where "gradeId" = $1
        `;
        db.query(sql2, params)
          .then(result => {
            res.sendStatus(204);
          })
          .catch(err => {
            console.error(err);
            res.status(500).json({
              error: 'An unexpected error occurred.'
            });
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})

app.listen(3000, () => {
  console.log('Listening to Port 3000!');
});
