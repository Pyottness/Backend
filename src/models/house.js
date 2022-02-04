const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('House', houseSchema);
