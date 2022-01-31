
const express = require('express');

const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const houseRoutes = require('./routes/houses');
app.use('/api/houses', houseRoutes);
const userRoutes = require('./routes/user');
app.use('/api/auth', userRoutes);

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
  res.json({ message: 'Your request was successful!'});
  next();
});

app.use((req, res, next) => {
  console.log('Response sent successfully!');
});

module.exports = app;
