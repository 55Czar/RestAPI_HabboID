const knex = require('../database');

module.exports = {
  async index(req, res) {
    const { username } = req.params;
    const user = await knex('users').where('username', username);
    
    if (user.length < 1) return res.status(400).send({ error: "Usuário não encontrado" });
    const user_stats = await knex('user_stats').where('id', user[0].id);

    res.status(200).send({
      id: user[0].id,
      username: user[0].username,
      created: user[0].account_created,
      points: user[0].gotw_points,
      diamonds: user[0].vip_points,
      credits: user[0].credits,
      duckets: user[0].activity_points,
      online: user[0].online == 1 ? 'on' : 'off',
      conquistas: user_stats[0].AchievementScore,
      respeitos: user_stats[0].Respect,
      avatar: `https://habbo.city/habbo-imaging/avatarimage?figure=${user[0].look}&direction=2&head_direction=3&gesture=sml&action=wav&size=l`
    })
  }
};