const controller = {
	index: (req, res) => {
		res.render('index');
	},
	registro: (req, res) => {
		res.render('registro');
	},
	produtos: (req, res) => {
		res.render('produtos');
	},
	carrinho: (req, res) => {
		res.render('carrinho');
	},,
	cadastro: (req, res) => {
		res.render('cadastro');
	},
	login: (req, res) => {
		const autentication = true;
		if(true) {
			return res.redirect('/login');
		}
	}
}

module.exports = controller;
