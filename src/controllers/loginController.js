const loginController = {
    login: (req,res) => {
        const autenticada = false;
        if (autenticada == true){
            res.redirect('/')
        }
        res.render('login')
    }
}

module.exports = loginController
