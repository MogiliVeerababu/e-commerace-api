const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart || cart.items.length === 0) return res.status(400).json({ msg: 'Cart is empty' });

  const order = new Order({ userId: req.user.id, items: cart.items });
  await order.save();
  cart.items = [];
  await cart.save();
  res.json(order);
});
module.exports = router;
