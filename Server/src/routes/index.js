const handlerCharById = require('../handlers/handleCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites')

const express = require('express');

const Router = express.Router()

Router.get("/character/:id", handlerCharById);

Router.get("/login", login);

Router.post("/fav", postFav);

Router.delete("/fav/:id", deleteFav);

module.exports = Router