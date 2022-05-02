const express = require('express');
const router = express.Router();

router.get('/contact/messages');
router.get('/contact/messages/:id');
router.put('/contact/messages/:id');
router.delete('/contact/messages/:id');

module.exports = router;