const knex = require('../database');

module.exports = {
  async index(req, res) {
    const { token_dc } = req.params;
    const usuario = await knex('users').where('token_dc', token_dc);
    
    if (usuario.length < 1) return res.status(400).send({ error: 'Token inválido!' })

    res.status(200).send({
      username: await usuario[0].username
    })
  }
};