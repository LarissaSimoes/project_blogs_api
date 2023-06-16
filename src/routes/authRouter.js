const express = require('express');
// const { Router } = require('express');

const { authController } = require('../controllers');

const router = express.Router();

router.post('/', authController.login);

module.exports = router;