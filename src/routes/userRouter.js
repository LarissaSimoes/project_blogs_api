const express = require('express');

const { userController } = require('../controllers');
const { displayNameValidation } = require('../middlewares/displayNameValidation');
const { emailValidation } = require('../middlewares/emailValidation');
const { passwordValidation } = require('../middlewares/passwordValidation');
const { validateJwt } = require('../middlewares/validateJwt');

const router = express.Router();

router.post(
'/', 
displayNameValidation,
emailValidation, 
passwordValidation, 
userController.create,
);

router.get('/', validateJwt, userController.findAll);

router.get('/:id', validateJwt, userController.findById);

module.exports = router;