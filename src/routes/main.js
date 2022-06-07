const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/login', mainController.login); 
router.get('/produtos', mainController.produtos); 
router.get('/carrinho', mainController.carrinho);
router.get('/cadastro', mainController.cadastro);
router.post('/', mainController.login);

module.exports = router;
