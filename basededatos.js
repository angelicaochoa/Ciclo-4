const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TiendaC')
    .then((db) => console.log('DB concectado'))
    .catch((err) => console.error(err))