const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.loginForm);
router.post('/loginusuario', loginController.loginUsuario);

module.exports = router;
