const express = require('express');
const routes = express.Router();
const Control = (controller) => {return require(`./controllers/${controller}Controller`);}


routes.get('/news', Control('News').index);
routes.get('/news/:id', Control('News').fetch);

routes.get('/status', Control('Hotel').index);
routes.get('/user/:username', Control('User').index);
routes.get('/token/:token_dc', Control('Token').index);
routes.get('/relationship/:id', Control('Relationship').index);

module.exports = routes;