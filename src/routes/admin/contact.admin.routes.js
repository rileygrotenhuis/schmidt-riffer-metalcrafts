const express = require('express');
const router = express.Router();

const contactController = require('../../controllers/contact.controller');

router.get('/contact/messages', contactController.getAllContactMessages);
router.get('/contact/messages/:id', contactController.getContactMessage);
router.put('/contact/messages/:id/read', contactController.readContactMessage);
router.put('/contact/messages/:id/unread', contactController.unreadContactMessage);
router.delete('/contact/messages/:id', contactController.deleteContactMessage);

module.exports = router;