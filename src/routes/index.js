const handlerCharById = require('../handlers/handleCharById');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const express = require('express');
const postUser = require('../controllers/postUser');

const Router = express.Router()

Router.get("/character/:id", handlerCharById);

Router.post('/login', postUser)

Router.get("/login", login);

Router.post("/fav", postFav);

Router.delete("/fav/:id", deleteFav);

module.exports = Router