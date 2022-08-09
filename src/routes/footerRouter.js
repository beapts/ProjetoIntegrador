const express = require('express');
const router = express.Router();

const footerController = require('../controllers/footerController');

router.get('/quemsomos', footerController.quemSomos);
router.get('/dadosdaempresa', footerController.dadosdaempresa);
router.get('/contato', footerController.contato);
router.get('/politicadedevolucao', footerController.politicadedevolucao);
router.get('/termosdeservico', footerController.termosdeservico);




module.exports = router;
