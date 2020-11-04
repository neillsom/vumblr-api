const express = require('express');

const postController = require('../controllers/post');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', postController.getIndex);



module.exports = router;
