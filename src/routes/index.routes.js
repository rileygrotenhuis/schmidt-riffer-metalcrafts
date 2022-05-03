const express = require('express');
const router = express.Router();

router.use(require('./authentication.routes'));
router.use(require('./public/index.public.routes'));
router.use(require('./admin/index.admin.routes'));

module.exports = router;