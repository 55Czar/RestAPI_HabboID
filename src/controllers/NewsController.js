const knex = require('../database');

module.exports = {
	async index(req, res) {
		let news = (await knex.select('id').from('cms_news'));
		let ids = [];
		for(i = 0; i < news.length; i++) {
			ids[ids.length] = parseInt(news[i].id);
		}
		return res.json({ids: ids})
	},
	async fetch(req, res) {
		const { id } = req.params;
		let news = await knex('cms_news').where('id', id);
		if(news.length < 1) return res.status(400).send({error: "Nenhuma notícia encontrada com este ID."});

		res.status(200).send(news[0])
	}
};