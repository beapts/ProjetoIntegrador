const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const painelController = require('../controllers/painelController');

router.get('/:id', painelController.painel);
router.get('/painelEdicao/:id', painelController.painelEdicao);
router.post('/painelEdicao/:id', painelController.atualizarDados);
router.get('/meuspedidos/:id', painelController.pedidos);
router.get('/meuspedidos/pedido/:idPedido', painelController.pedidoItens);




module.exports = router;
