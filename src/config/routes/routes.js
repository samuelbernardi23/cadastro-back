module.exports = (app) => {
    app.get('/', (req, res) => {
        res.marko(require('../../public/index.marko'), {
            livros: [
                {
                    id: 1,
                    titulo: "Mateus"
                },
                {
                    id: 2,
                    titulo: "Marcos"
                },
                {
                    id: 2,
                    titulo: "Lucas"
                },
                {
                    id: 2,
                    titulo: "João"
                }
            ]
        })
    });
}