const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const cadastroController = require('../controllers/cadastroController');
const carrinhoController = require('../controllers/carrinhoController');
const listagemController = require('../controllers/listagemController');
const loginController = require('../controllers/loginController');
const painelController = require('../controllers/painelController');
const produtoController = require('../controllers/produtoController');

//fazer as rotas e as views pra cada produto separamente depois, atenção aos produtos do banco de dados (yohanna)
//atualizar projeto

router.get('/produto', produtoController.produto);
router.get('/painel', painelController.painel);
router.get('/login', loginController.login);
router.get('/listagem', listagemController.listagem);
router.get('/carrinho', carrinhoController.carrinho);
//router.get('/cadastro', cadastroController.cadastro);
router.get('/', homeController.home); 

module.exports = router;
