
const footerController = {
    quemSomos: async (req, res) => {
		res.render('quemSomos');
	},
	dadosdaempresa: async (req, res) => {
		res.render('dadosdaempresa');
	},
	contato: async (req, res) => {
		res.render('contato');
	},
	politicadedevolucao: async (req, res) => {
		res.render('politicadedevolucao');
	},
	termosdeservico: async (req, res) => {
		res.render('termosdeservico');
	},
	
}



module.exports = footerController