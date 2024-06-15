const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() => {
        console.log('Conectado ao banco');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB', err);
    });

 mongoose.Promise = global.Promise;

module.exports = mongoose;