const express = require('express');
const router = express.Router();

const productsController = require('../../controllers/products.controller');
const quotesController = require('../../controllers/quotes.controller');
const contactController = require('../../controllers/contact.controller');

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProduct);
router.post('/quotes', quotesController.newQuoteSubmission);
router.post('/contact', contactController.newContactMessage);

module.exports = router;