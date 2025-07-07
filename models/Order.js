const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
