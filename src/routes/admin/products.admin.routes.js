const express = require('express');
const router = express.Router();

const productsController = require('../../controllers/products.controller');

router.post('/products', productsController.createNewProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);
router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProduct);

module.exports = router;