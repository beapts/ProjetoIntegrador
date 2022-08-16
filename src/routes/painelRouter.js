const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const painelController = require('../controllers/painelController');

router.get('/', auth, painelController.painel);
router.get('/painelEdicao', painelController.painelEdicao);
router.post('/painelEdicao', painelController.atualizarDados);
router.get('/meuspedidos', painelController.pedidos);
router.get('/meuspedidos/pedido/:idPedido', painelController.pedidoItens);

router.post('/deletarusuario', painelController.deletarUsuario)



module.exports = router;
