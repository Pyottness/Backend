
const express = require('express');
const router = express.Router();

const House = require('../models/house');

const housesCtrl = require('../controllers/houses');

router.get('/', housesCtrl.getAllHouses);
router.post('/', housesCtrl.createHouse);
router.get('/:id', housesCtrl.getOneHouse);
router.put('/:id', housesCtrl.modifyHouse);
router.delete('/:id', housesCtrl.deleteHouse);


module.exports = router;
