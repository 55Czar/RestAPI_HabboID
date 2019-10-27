const knex = require('../database');

module.exports = {
  async index(req, res) {
    const { id } = req.params;
    let coracao = [], carinha = [], caveira = [];
    const relationships = await knex('user_relationships').where('user_id', id);

    if (relationships.length < 1) return res.status(400).send({ error: "Usuário não encontrado" });


    relationships.forEach(relation => {
      relation.type == '1' ? coracao[coracao.length] = relation.target : relation.type == '2' ? carinha[carinha.length] = relation.target : caveira[caveira.length] = relation.target;
    })
    coracao = await knex('users').where('id', `${coracao[Math.floor(Math.random() * coracao.length)]}`);
    carinha = await knex('users').where('id', `${carinha[Math.floor(Math.random() * carinha.length)]}`);
    caveira = await knex('users').where('id', `${caveira[Math.floor(Math.random() * caveira.length)]}`);

    res.status(200).send({
      coracao: coracao.length > 0 ? (coracao[0]).username : 'Não definido',
      carinha: carinha.length > 0 ? (carinha[0]).username : 'Não definido',
      caveira: caveira.length > 0 ? (caveira[0]).username : 'Não definido'
    })
  }
};