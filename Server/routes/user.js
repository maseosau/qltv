const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.post('/register', UserController.signUp)
router.post('/login', UserController.login)
router.post('/verify', UserController.verifyInfomation)
router.get('/getInfomation', UserController.getUserInfomation)

module.exports = router;