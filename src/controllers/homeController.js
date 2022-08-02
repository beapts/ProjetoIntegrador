const { Produtos } = require('../../models')
const homeController = {
    home: async (req,res) => {
    let produtos = await Produtos.findAll();
    
    return res.render('home', {produtos})
    }
}

module.exports = homeController;
