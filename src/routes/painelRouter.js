const express = require('express');
const router = express.Router();

const painelController = require('../controllers/painelController');

router.get('/painel', painelController.painel);

module.exports = router;
