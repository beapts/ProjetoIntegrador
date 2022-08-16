const db = require('../../models');
const bcrypt = require('bcryptjs');
const { hash } = require("bcrypt");

const loginController = {
    loginForm: async (req, res) => {
        res.render('login')
    },
    loginUsuario: async (req, res) => {
        const { email, senha } = req.body;
        try {
            const usuario = await db.Usuario.findOne({
                where: {
                   email,
                   senha
                }
            }) 

            /* function criarHash(senha) {
                const cost = 10;
                const salt = bcrypt.genSaltSync(cost);
                const cyphertext = bcrypt.hashSync(senha, salt);
                return cyphertext;
              }
            let hashResult = criarHash(senha); */

            if (!usuario) {
                return res.send("Erro: Login não autorizado, verifique o e-mail e a senha")
            };

            /* if (!hashResult) {
                return res.send("Erro: Senha incorreta")
            }; */

            /* let verificarSenha = bcrypt.compareSync(req.body.senha, usuario.senha); */

                if (req.body.senha == usuario.senha) {
                    req.session.usuario = usuario;
                    console.log(req.session);
                    return res.redirect('/') 
                }

        } catch (error) { 
            console.log(error.message) 
        }
    }
}

module.exports = loginController
