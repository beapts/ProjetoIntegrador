const { Produtos } = require('../../models')
const produtoController = {
    produto: async(req, res) => {
		try{
		const produtos = await Produtos.findAll();
		
		res.render('produtos', {produtos});
		} catch (error){
			console.log(error)
			res.send("Nenhum produto localizado!")
		}
	},
	visualizarProduto: async (req, res) => {
		let {id} = req.params
		try {
		let produto = await Produtos.findOne({
			where: {
				id
			}
		});
		return res.render('produtos', {produto})
		} catch (error){
			console.log(error)
			res.send("Nenhum produto localizado!")
		}
	}
}

module.exports = produtoController