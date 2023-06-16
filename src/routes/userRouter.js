const express = require('express');

const { userController } = require('../controllers');
const { displayNameValidation } = require('../middlewares/displayNameValidation');
const { emailValidation } = require('../middlewares/emailValidation');
const { passwordValidation } = require('../middlewares/passwordValidation');

const router = express.Router();

router.post(
'/', 
displayNameValidation,
emailValidation, 
passwordValidation, 
userController.create,
);

module.exports = router;