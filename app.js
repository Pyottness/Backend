
const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/houses', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'House created successfully!'
  });
});

app.use('/api/houses', (req, res, next) => {
  const houses = [
    {
      _id: '1',
      title: 'White House',
      price: 150000,
    },
    {
      _id: '2',
      title: 'Orange Brick House',
      price: 300000,
    },
  ];
  res.status(200).json(houses);
});

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
