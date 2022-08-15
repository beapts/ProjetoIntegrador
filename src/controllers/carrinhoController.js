
const { Produtos } = require('../../models');
const { Carrinho } = require('../../models');
const { Pedido } = require('../../models/');
const { ItensPedido } = require('../../models/');



const carrinhoController = {
    carrinho: async (req, res) => {
		let carrinho = await Carrinho.findAll();
		let produtos = await Carrinho.findAll();
		res.render('finalizarCompra', {carrinho, produtos});
	},
	adicionarItem: async (req, res) => {
		let {id} = req.params

		try {
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
		} catch (error) {
			console.log(error)
			res.send('Algo deu errado, contate o nosso suporte')
		}

	
	},
	deletar: async (req, res) => {
		let {id} = req.params

		try {
			await Carrinho.destroy({
				where: {
					id: id
				}
			});
			res.redirect('/carrinho');
		} catch (error) {
			console.log(error)
			res.send('Algo deu errado, contate o nosso suporte')
		}
	},
	atualizar: async (req, res) => {
		let {id} = req.params
		let {quantidade} = req.body
		
		try { 
			await Carrinho.update({
				quantidade: quantidade
				},
				{
				where: {id: id}
				}
			);

			res.redirect('/carrinho');
		} catch (error) {
			console.log(error)
			res.send('Algo deu errado, contate o nosso suporte')
		}
	},
	finalizarpedido: async (req,res) => {
		let carrinho = await Carrinho.findAll();

		let {id} = req.params

		let quantidadeItens = 0
		let valorTotal = 0
		try {
			carrinho.forEach(carrinho =>{
				quantidadeItens= parseInt(quantidadeItens) + parseInt(carrinho.quantidade)
				valorTotal = (parseInt(valorTotal) + parseInt((carrinho.preco)*(carrinho.quantidade)))
			})

			let pedido = await Pedido.create({
				id_usuario_fk: id,
				quantidade_itens: quantidadeItens,
				valor_total: valorTotal,
				forma_pagamento: 'PIX',
				endereco_entrega: 'Rua de teste, 455',
			}); 

			let numeroPedido = pedido.id
			
			
			for (let i = 0; i < carrinho.length ; i++) {
				console.log(carrinho[i].id_produto) 
			
				 await ItensPedido.create({
					id_pedido_fk: numeroPedido,
					item_fk: carrinho[i].id_produto,
					quantidade: carrinho[i].quantidade
				}) 
			}  
			
/* 			await Carrinho.destroy()
 */
			res.render('pedidoFinalizado')
		}
		catch (error){
			console.log(error)
			res.send('Algo deu errado, contate o nosso suporte')
		}
		
	}
}


module.exports = carrinhoController