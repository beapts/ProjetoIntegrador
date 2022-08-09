const db = require('../../models');

const cadastroController = {
    cadastro: (req, res) => {
      res.render('cadastro')
    },

    cadastrarUsuario: async (req, res) =>  {
      let { nome, email, senha, cpf } = req.body;
      try {
        var newUser = await db.Usuario.create({
            nome, email, senha, cpf
        })
        console.log(newUser)
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