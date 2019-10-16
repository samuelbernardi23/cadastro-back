const Membro = require('../models/Membros');

module.exports = {
    async index(req, res) {
        const { email } = req.headers;
        const { senha } = req.headers;

        // console.log(senha)
        const resposta = await Membro.findOne({ email })

        if(!!resposta && senha === resposta.senha){
            return res.json({resposta:"sucesso"})
        }else{
            return res.json({resposta:"fracasso"})
        }

        // console.log(resposta)
        // return res.json({ resposta })
    }
}