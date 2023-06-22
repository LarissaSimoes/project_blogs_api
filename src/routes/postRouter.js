const express = require('express');

const { postController } = require('../controllers');
const { validateJwt } = require('../middlewares/validateJwt');
const { blogPostValidation } = require('../middlewares/blogPostValidation');

const router = express.Router();

router.post('/', validateJwt, blogPostValidation, postController.create);

router.get('/', validateJwt, postController.findAll);

module.exports = router;