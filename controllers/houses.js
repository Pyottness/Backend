
const House = require('../models/house');

exports.createHouse = (req, res, next) => {
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
};

exports.getOneHouse = (req, res, next) => {
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
};

exports.modifyHouse = (req, res, next) => {
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
};

exports.deleteHouse = (req, res, next) => {
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
};

exports.getAllHouses = (req, res, next) => {
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
};
