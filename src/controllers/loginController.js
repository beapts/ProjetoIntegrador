const db = require('../../models');
const bcrypt = require('bcryptjs');
const { hash } = require("bcrypt");

const loginController = {
    loginForm: (req, res) => {
        res.render('login')
    },
    loginUsuario: async (req, res) => {
        const { email, senha } = req.body;
        console.log(req.session);
        try {
            const usuario = await db.Usuario.findOne({
                where: {
                   email,
                   senha
                }
            }) 

            function criarHash(senha) {
                const cost = 10;
                const salt = bcrypt.genSaltSync(cost);
                const cyphertext = bcrypt.hashSync(senha, salt);
                return cyphertext;
              }
            let hashResult = criarHash(senha);

            if (!usuario) {
                return res.send("Erro: Usuário não encontrado, verifique o e-mail")
            };

            if (!hashResult) {
                return res.send("Erro: Senha incorreta")
            };

            let verificarSenha = bcrypt.compareSync(req.body.senha, usuario.senha);

                if (verificarSenha = true) {
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
