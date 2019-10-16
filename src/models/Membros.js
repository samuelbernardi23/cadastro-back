const mongoose = require('mongoose');

const MembroSchema = new mongoose.Schema({
    nome: String,
    sobreNome: String,
    email: String,
    senha: String
})

module.exports = mongoose.model('Membro', MembroSchema);