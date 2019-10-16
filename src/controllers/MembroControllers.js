const Membro = require('../models/Membros');

module.exports = {
    async store(req, res) {

        const { nome } = req.body;
        const { sobreNome } = req.body;
        const { email } = req.body;
        const { senha } = req.body;


        let membro = await Membro.findOne({ email })
        
        if (!membro) {
            membro = await Membro.create({ nome, sobreNome, email, senha })
            return res.json(membro)
        }
        return false;
        
    },

    index(req, res) {
        return res.json({ nome: "samuel" })
    }
}