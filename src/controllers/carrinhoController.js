
const { Produtos } = require('../../models');
const { Carrinho } = require('../../models');



const carrinhoController = {
    carrinho: async (req, res) => {
		let carrinho = await Carrinho.findAll();
		let produtos = await Carrinho.findAll();
		res.render('finalizarCompra', {carrinho, produtos});
	},
	adicionarItem: async (req, res) => {
		let {id} = req.params
		let produto = await Produtos.findOne({
			where: {
				id
			}
		});
		
		await Carrinho.create({
			id_produto: produto.id,
			nome_produto: produto.nome, 
			preco:produto.preco,
			quantidade: '1',
			produto_img: produto.produto_img
		}); 


		res.redirect('/carrinho');
	
	},
	deletar: async (req, res) => {
		let {id} = req.params
		await Carrinho.destroy({
			where: {
				id: id
			}
		});
		res.redirect('/carrinho');
	}
}

/* const carrinhoController = {
    carrinho: (req, res) => {
		res.render('carrinho');
	}
} */

module.exports = carrinhoController