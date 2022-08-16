const { body } = require('express-validator');

const loginValidator = [
    body("email").notEmpty().withMessage("Digite um email válido").isEmail(),
    body("senha").notEmpty().withMessage("Digite uma senha válida")
];

module.exports = loginValidator