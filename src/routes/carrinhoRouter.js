const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');

router.get('/', carrinhoController.carrinho);
router.post('/adicionar/:id', carrinhoController.adicionarItem);
router.post('/deletar/:id', carrinhoController.deletar);
router.post('/atualizar/:id', carrinhoController.atualizar);
router.get('/finalizar', auth, carrinhoController.finalizarpedido);






module.exports = router;
