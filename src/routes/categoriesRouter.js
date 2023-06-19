const express = require('express');

const { categoriesController } = require('../controllers');
const { validateJwt } = require('../middlewares/validateJwt');
const { categoryNameValidation } = require('../middlewares/categoryNameValidation');

const router = express.Router();

router.post('/', validateJwt, categoryNameValidation, categoriesController.create);

module.exports = router;