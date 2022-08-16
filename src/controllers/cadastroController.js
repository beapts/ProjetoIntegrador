const db = require('../../models');
const bcrypt = require('bcryptjs');
const { hash } = require("bcrypt");

const cadastroController = {
    cadastro: (req, res) => {
      res.render('cadastro')
    },

    cadastrarUsuario: async (req, res) =>  {
      let { nome, email, senha, cpf } = req.body;
      try {
        /* function criarHash(senha) {
          const cost = 10;
          const salt = bcrypt.genSaltSync(cost);
          const cyphertext = bcrypt.hashSync(senha, salt);
          return cyphertext;
        }
        let hashResult = criarHash(senha); */

        var newUser = await db.Usuario.create({
            nome, email, senha, cpf
        })
        if (newUser) {
          return res.redirect("/login");
      }
        } catch (error) { 
          console.log(error.message) 
          }
    }
  }
  
  module.exports = cadastroController;