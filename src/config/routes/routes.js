module.exports = (app) => {
    app.get('/', (req, res) => {
        res.marko(require('../../public/index.marko'))
    });
}