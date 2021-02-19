require('./config/configuracion');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, '../public')));


// Configuración global de rutas
app.use(require('./Rutas/Tarea'))



mongoose.connect(process.env.URLDB, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});