'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(require('body-parser').json({}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html')); 
});

app.get('/submit.js', (req, res) => {
  let k = fs.readFileSync('./submit.js', 'utf8');
  res.send(k);
});

app.post('/signUp.js', (req, res) => {
  let signUp = require('./signUp');
  signUp.collect(req, res);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('server started');
});

