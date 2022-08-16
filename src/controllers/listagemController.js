const { Produtos } = require('../../models');

const listagemController = {
    listagem: async (req, res) => {
		let {id} = req.params
		try{
			let produtos = await Produtos.findAll({
				where: {
					id_categoria_fk: id
				}
			});
			res.render('listagem', {produtos});
		} catch (error) {
			console.log(error)
			res.send("Categoria de produtos não encontradas!")
		}
	}
}

module.exports = listagemController