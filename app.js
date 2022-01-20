
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('request received!');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Your request was succesful!'});
  next();
});

app.use((req, res, next) => {
  console.log('Response sent succesfully!');
});

module.exports = app;