const express = require('express');
const router = express.Router();
const loginValidator = require('../middleware/loginValidator');
const loginController = require('../controllers/loginController');

router.get('/', loginController.loginForm);
router.post('/loginusuario', loginValidator, loginController.loginUsuario);

module.exports = router;
