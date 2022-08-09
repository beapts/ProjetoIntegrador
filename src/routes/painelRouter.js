const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const painelController = require('../controllers/painelController');

router.get('/', painelController.painel);

module.exports = router;
