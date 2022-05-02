const express = require('express');
const router = express.Router();

router.use(require('./products.admin.routes'));
router.use(require('./quotes.admin.routes'));
router.use(require('./contact.admin.routes'));

module.exports = router;