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
        function criarHash(senha) {
          const cost = 10;
          const salt = bcrypt.genSaltSync(cost);
          const cyphertext = bcrypt.hashSync(senha, salt);
          return cyphertext;
        }
        let hashResult = criarHash(senha);

        var newUser = await db.Usuario.create({
            nome, email, senha: hashResult, cpf
        })
        if (newUser) {
          return res.redirect("/login");
      }
        } catch (error) { 
          console.log(error.message) 
          }
    },

    buscarUsuario: async (req, res) => {
      const usuario = await db.Users.findAll()
      res.send(usuario)
    },

    editarUsuario: async (req, res) => {
      const editarUsuario = await db.Users.update(users, { where: { id } })
    },

    deletarUsuario: async (req, res) => {
      const deletarUsuario = await db.Users.destroy({ where: { id } })
    },
  }
  
  module.exports = cadastroController;