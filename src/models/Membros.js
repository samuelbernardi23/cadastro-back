const mongoose = require('mongoose');

const MembroSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    telefone: String,
    idade: Number,
    email: String
})

module.exports = mongoose.model('Membro', MembroSchema);