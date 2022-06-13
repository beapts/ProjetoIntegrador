const controller = {
	index: (req, res) => {
		res.render('index');
	},
	produtos: (req, res) => {
		res.render('produtos');
	},
	carrinho: (req, res) => {
		res.render('carrinho');
	},
	cadastro: (req, res) => {
		res.render('cadastro');
	},
	login: (req, res) => {
		const autentication = true;
		res.render('login');
		if(true) {
			res.redirect('/');
		}
	},
	compras: (req, res) => {
		res.render('compras');
	}
}

module.exports = controller;
