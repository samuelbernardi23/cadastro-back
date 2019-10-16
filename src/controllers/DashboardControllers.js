const Membro = require('../models/Membros');

module.exports = {
    async index(req, res) {
        const { _id } = req.headers;

        const resposta = await Membro.findOne({ _id })

        if(!!resposta){
            return res.json(resposta)
        }else{
            return res.json({resposta:false})
        }
    }
}