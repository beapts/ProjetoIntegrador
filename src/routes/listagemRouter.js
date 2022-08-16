const express = require('express');
const router = express.Router();

const listagemController = require('../controllers/listagemController');

router.get('/:id', listagemController.listagem);

module.exports = router;
