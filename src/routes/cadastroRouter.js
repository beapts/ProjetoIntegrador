const express = require('express');
const router = express.Router();

const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.cadastro);
router.post('/cadastrarusuario', cadastroController.cadastrarUsuario);

module.exports = router;
