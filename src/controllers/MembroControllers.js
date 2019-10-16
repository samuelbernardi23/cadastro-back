const Membro = require('../models/Membros');

module.exports = {
    async store(req, res) {

        const { nome } = req.body;
        const { idade } = req.body;
        const { email } = req.body;


        const membro = await Membro.create({ nome, idade, email })

        console.log(membro)
        return res.json(membro)
    },

    index(req,res){
        return res.json({nome:"samuel"})
    }
}