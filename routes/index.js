
const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/home_controller').home);

router.post('/sign-up', require('../controllers/home_controller').signUp);

router.post('/sign-in', require('../controllers/home_controller').signIn);

router.get('/sign-out', require('../controllers/home_controller').signOut);

//Use router for all User paths
router.use('/users', require('./users'));

module.exports = router;