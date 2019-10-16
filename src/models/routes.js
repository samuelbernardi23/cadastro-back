const MembroController = require('../controllers/MembroControllers');
const SessionController = require('../controllers/SessionControllers');
const DashboardController = require('../controllers/DashboardControllers');

const express = require('express');
const routes = express.Router();


routes.post('/cadastrarMembro', MembroController.store);
routes.get('/login', SessionController.index);
routes.get('/dashboard', DashboardController.index);



module.exports = routes;