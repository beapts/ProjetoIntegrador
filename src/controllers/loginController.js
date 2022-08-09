const db = require('../../models');

const loginController = {
    loginForm: (req, res) => {
        res.render('login')
    },
    loginUsuario: async (req, res) => {
        const { email, senha } = req.body;
        try {
            const findUser = await db.Usuario.findOne({
                where: {
                   email,
                   senha
                }
            })

            if (findUser != null) {
                res.redirect('/')
            }
            return res.render('perfil')
            

        } catch (error) { console.log(error.message) }
    }
}

module.exports = loginController
