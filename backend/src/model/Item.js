const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6
  },
  price: {
    type: Number,
    required: true
  },
  savingDateStart: {
    type: Date,
    required: true
  },
  savingDateEnd: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Item', itemSchema);
