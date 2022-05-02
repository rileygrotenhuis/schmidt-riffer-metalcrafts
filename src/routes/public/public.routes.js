const express = require('express');
const router = express.Router();

router.get('/products');
router.get('/products/:id');
router.post('/quotes');
router.post('/contact');

module.exports = router;