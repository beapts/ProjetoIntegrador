const express = require('express');
const router = express.Router();
const cadastroValidator = require('../middleware/cadastroValidator');
const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.cadastro);
router.post('/cadastrarusuario', cadastroValidator, cadastroController.cadastrarUsuario);

module.exports = router;
