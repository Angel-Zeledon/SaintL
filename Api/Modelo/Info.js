const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
};


let Schema = mongoose.Schema;


let Trabajo = new Schema({
    titulo: {
        type: String,
        required: [true, 'El Titulo es necesario']
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es necesaria']
    },
    parrafo: {
        type: String,
        required: [true, 'El parrafo es obligatorio']
    },
    materia: {
        type: String,
        required: [true, 'La materia es necesaria']
    },
    grado: {
        type: String,
        required: [true, 'El grado es necesario']
    },
    img: {
        type: String,
        required: false
    },
    profe: {
        type: String,
        required: [true, 'Saber el profesor es necesario']
    },

});







module.exports = mongoose.model('Trabajo', Trabajo);