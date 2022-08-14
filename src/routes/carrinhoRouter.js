const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');

router.get('/', carrinhoController.carrinho);
router.post('/adicionar/:id', carrinhoController.adicionarItem);
router.post('/deletar/:id', carrinhoController.deletar);
router.post('/atualizar/:id', carrinhoController.atualizar);
router.get('/finalizar/:id', carrinhoController.finalizarpedido);






module.exports = router;
