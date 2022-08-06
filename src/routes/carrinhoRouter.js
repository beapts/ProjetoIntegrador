const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');

router.get('/', carrinhoController.carrinho);
router.post('/adicionar/:id', carrinhoController.adicionarItem);


module.exports = router;
