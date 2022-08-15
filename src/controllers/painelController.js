const { Usuario } = require('../../models');
const { Pedido } = require('../../models');
const { ItensPedido } = require('../../models');
const { Produtos } = require('../../models');



const painelController = {
    painel: async(req, res) => {
		let {id} = req.params
		try{
			let usuario = await Usuario.findOne({
				where: {
					id: id
				}
			});
			console.log(usuario)
			res.render('painel', {usuario});
		} catch (error) {
			console.log(error)
			res.send('Algo deu errado, contate o nosso suporte')
		}
	},
	painelEdicao: async(req, res) => {
		let {id} = req.params
		let usuario = await Usuario.findOne({
			where: {
				id: id
			}
		});
		console.log(usuario)
		res.render('painelEdicao', {usuario});
	},
	atualizarDados: async (req, res) => {
		let {id} = req.params
		let {nome, email, cpf} = req.body
		
		try {
			await Usuario.update({
				nome: nome,
				email: email,
				cpf: cpf,
				},
				{
				where: {id: id}
				}
			);

			let usuario = await Usuario.findOne({
				where: {
					id: id
				}
			});
			console.log(usuario)
			res.render('painel', {usuario});
		} catch (error) {
			console.log(error)
			res.send('Algo deu errado, contate o nosso suporte')
		}
	},
	pedidos: async (req, res) => {
		let{id} = req.params

		try {
			let pedidos = await Pedido.findAll({
				where: {
					id_usuario_fk: '1' /* Chumbado para testar */
				}
			})
			console.log(pedidos)
			res.render('pedidos', {pedidos})
		} catch (error) {
			console.log(error)
			res.send('Algo deu errado, contate o nosso suporte')
		}
		
	},
	pedidoItens: async (req,res) => {
		let{idPedido} = req.params

		try {
			let itens = await ItensPedido.findAll({
				where: {
					id_pedido_fk: idPedido 
				}
			})
			let pedido = await Pedido.findOne({
				where: {
					id: idPedido
				}
			})
			let produtos = await Produtos.findAll()

			res.render('pedidosItens', {itens, pedido, produtos})

		} catch (error) {
			console.log(error)
			res.send('Algo deu errado, contate o nosso suporte')
		}
	}
}

module.exports = painelController