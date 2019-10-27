const knex = require('../database');

module.exports = {
	async index(req, res) {
		return res.json({
			onlines: (await knex('users').where('online', '1')).length,
			cadastrados: (await knex('users')).length,
			quartos_ativos: ((await knex('rooms')).filter(db => db.users_now > 0)).length,
			noticias: (await knex('cms_news')).length
		});
	}
};