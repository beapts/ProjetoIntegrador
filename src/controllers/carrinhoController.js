
const { Produtos } = require('../../models');
const {Carrinho} = require('../../models');



const carrinhoController = {
    carrinho: async (req, res) => {
		//let pedido = await Pedido.findAll();
		//let itens = await ItensPedido.findAll();

		/* res.render('finalizarCompra', {pedido, itens}); */
		res.render('finalizarCompra');
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
			quantidade: '1'
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