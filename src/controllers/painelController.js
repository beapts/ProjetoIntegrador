const { Usuario } = require('../../models');
const { Pedido } = require('../../models');
const { ItensPedido } = require('../../models');
const { Produtos } = require('../../models');



const painelController = {
    painel: async(req, res) => {
		console.log('Entrei na rota')
		console.log(req.session)
		let {id} = req.session.usuario
		console.log(id)
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
		let {id} = req.session.usuario
		let usuario = await Usuario.findOne({
			where: {
				id: id
			}
		});
		console.log(usuario)
		res.render('painelEdicao', {usuario});
	},
	atualizarDados: async (req, res) => {
		let {id} = req.session.usuario
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
		let {id} = req.session.usuario

		try {
			let pedidos = await Pedido.findAll({
				where: {
					id_usuario_fk: id /* Chumbado para testar */
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
	},
	
	deletarUsuario: async (req, res) => {
		const deletarUsuario = await db.Users.destroy({ where: { id } })
	  },
}

module.exports = painelController