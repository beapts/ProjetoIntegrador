const { body } = require('express-validator');

const cadastroValidator = [
    body("nome").notEmpty().withMessage("Digite seu nome").isString(),
    body("email").notEmpty().withMessage("Digite seu email").isEmail(),
    body("senha").notEmpty().withMessage("Digite sua senha"),
    body("cpf").notEmpty().withMessage("Digite seu CPF"),
];

module.exports = cadastroValidator