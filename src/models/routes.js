const MembroController = require('../controllers/MembroControllers')
const SessionController = require('../controllers/SessionControllers')

const express = require('express');
const routes = express.Router();


routes.post('/cadastrarMembro', MembroController.store);
routes.get('/', MembroController.index);
routes.get('/login', SessionController.index);



module.exports = routes;