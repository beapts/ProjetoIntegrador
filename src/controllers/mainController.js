const controller = {
	index: (req, res) => {
		res.render('index');
	},
	registro: (req, res) => {
		res.render('registro');
	},
	produtos: (req, res) => {
		res.render('produtos');
	}
}

module.exports = controller;
