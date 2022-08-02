const { Produtos } = require('../../models')
const produtoController = {
    produto: async(req, res) => {
		const produtos = await Produtos.findAll();
		
		res.render('produtos', {produtos});
	},
	visualizarProduto: async (req, res) => {
		let {id} = req.params
		let produto = await Produtos.findOne({
			where: {
				id
			}
		});
		return res.render('produtos', {produto})
	}
}

module.exports = produtoController