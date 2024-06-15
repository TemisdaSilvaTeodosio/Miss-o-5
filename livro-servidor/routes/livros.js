const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao')

router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao obter livros', erro: err });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoLivro = await incluir(req.body);
        res.status(201).json({ mensagem: 'Livro incluído com sucesso', livro: novoLivro });
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro', erro: err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const codigo = req.params.id;
        const resultado = await excluir(codigo);
        if (resultado.deletedCount === 0) {
            res.status(404).json({ mensagem: 'Livro não encontrado' });
        } else {
            res.json({ mensagem: 'Livro excluído com sucesso' });
        }
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro', erro: err });
    }
});

module.exports = router;