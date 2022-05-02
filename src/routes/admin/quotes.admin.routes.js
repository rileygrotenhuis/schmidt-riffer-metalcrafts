const express = require('express');
const router = express.Router();

router.put('/quotes/:id');
router.delete('/quotes/:id');
router.get('/quotes');
router.get('/quotes/:id');

module.exports = router;