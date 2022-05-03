const express = require('express');
const router = express.Router();

const productsController = require('../../controllers/products.controller');
const contactController = require('../../controllers/contact.controller');

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProduct);
router.post('/quotes');
router.post('/contact', contactController.newContactMessage);

module.exports = router;