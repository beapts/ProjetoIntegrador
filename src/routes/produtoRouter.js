const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');


//fazer as rotas e as views pra cada produto separamente depois, atenção aos produtos do banco de dados (yohanna)

router.get('/', produtoController.produto);

module.exports = router;
