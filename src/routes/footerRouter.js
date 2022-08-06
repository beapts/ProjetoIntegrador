const express = require('express');
const router = express.Router();

const footerController = require('../controllers/footerController');

router.get('/quemsomos', footerController.quemSomos);
router.get('/dadosdaempresa', footerController.quemSomos);
router.get('/contato', footerController.quemSomos);
router.get('/politicadedevolucao', footerController.quemSomos);
router.get('/termosdeservico', footerController.quemSomos);




module.exports = router;
