const MembroController = require('../controllers/MembroControllers')

const express = require('express');
const routes = express.Router();


routes.post('/cadastrarMembro', MembroController.store);
routes.get('/', MembroController.index);



module.exports = routes;