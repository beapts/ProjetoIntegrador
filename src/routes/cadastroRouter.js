const express = require('express');
const router = express.Router();

const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.cadastro);
router.get('/usuario', cadastroController.buscarUsuario)
router.post('/cadastrarusuario', cadastroController.cadastrarUsuario);
router.post('/editarusuario', cadastroController.editarUsuario)
router.post('/deletarusuario', cadastroController.deletarUsuario)

module.exports = router;
