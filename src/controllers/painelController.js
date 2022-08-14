const { Usuario } = require('../../models');

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
		let {nome, email, cpf, dataNasc} = req.body
		
		await Usuario.update({
			nome: nome,
			email: email,
			cpf: cpf,
			data_nasc: dataNasc
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

	},
	pedidos: async (req, res) => {
		let{id} = req.params
		res.render('pedidos')
	}
}

module.exports = painelController