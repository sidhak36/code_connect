
const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/home_controller').home);

module.exports = router;