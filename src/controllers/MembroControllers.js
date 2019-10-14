const Membro = require('../models/Membros');

module.exports = {
    async store(req, res) {

        const { nome } = req.headers;
        const { idade } = req.headers;
        const { email } = req.headers;


        const membro = await Membro.create({ nome, idade, email })

        return res.json(membro)
    },

    async index(req,res){
        res.send('<h1>Hello World</h1>')
    }
}