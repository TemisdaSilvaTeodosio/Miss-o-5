const mongoose = require('mongoose');
const banco = require('./conexao');
const { Schema } = mongoose;

const livroSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: false
    },
    titulo: {
        type: String,
        required: true
    },
    codEditora: {
        type: Number,
        required: true
    },
    resumo: {
        type: String,
        required: true
    },
    autores: {
        type: [String],
        required: true
    }
});

const Livro = banco.model('Livro', livroSchema);

module.exports = Livro