const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

// Public route to get all products (removed pagination so all show)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // No limit/skip here
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin Routes
router.post('/', auth, role('admin'), async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

router.put('/:id', auth, role('admin'), async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

router.delete('/:id', auth, role('admin'), async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
});

module.exports = router;
