const express = require('express');
const router = express.Router();

const quotesController = require('../../controllers/quotes.controller');

router.put('/quotes/:id/read', quotesController.readQuoteSubmission);
router.put('/quotes/:id/unread', quotesController.unreadQuoteSubmission);
router.delete('/quotes/:id', quotesController.deleteQuoteSubmission);
router.get('/quotes');
router.get('/quotes/:id');

module.exports = router;