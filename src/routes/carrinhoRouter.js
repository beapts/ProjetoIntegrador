const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');

router.get('/', carrinhoController.carrinho);
router.post('/adicionar/:id', carrinhoController.adicionarItem);
router.post('/deletar/:id', carrinhoController.deletar);


module.exports = router;
