
const express = require('express');
const router = express.Router();

const House = require('../models/house');

router.post('/', (req, res, next) => {
  const house = new House({
    title: req.body.title,
    userId: req.body.userId,
    price: req.body.price,
  });
  house.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.get('/:id', (res, res, next) => {
  House.findOne({
    _id: req.params.id
  }).then(
    (house) => {
      res.status(200).json(house);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.put('/:id', (req, res, next) => {
  const house = new House({
    _id: req.params.id,
    title: req.body.title,
    userId: req.body.userId,
    price: req.body.price,
  });
  House.updateOne({_id: req.params.id}, house).then(
    () => {
      res.status(201).json({
        message: 'House updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.delete('/:id', (req, res, next) => {
  House.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.get('/' + '', (req, res, next) => {
  House.find().then(
    (houses) => {
      res.status(200).json(houses);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = router;
