const express = require('express');
const router = express.Router();

router.post('/products');
router.put('/products/:id');
router.delete('/products/:id');
router.get('/products');
router.get('/products/:id');

module.exports = router;