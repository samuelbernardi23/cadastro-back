const MembroController = require('../../controllers/MembroControllers')

module.exports = (app) => {
    app.post('/', MembroController.store);
}

module.exports = (app) =>{
    app.get('/', MembroController.index);
}