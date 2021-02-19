const express = require('express')

const app = express()

const Trabajo = require('../Modelo/Info')

app.get('/info/:grado/:mat', (req, res) => {
    let grado = req.params.grado
    let mat = req.params.mat

    Trabajo.find({ grado: grado, materia: mat }).exec((err, info) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            info
        })
    })
})


app.post('/subir', (req, res) => {
    let body = req.body

    let trabajo = new Trabajo({
        titulo: body.titulo,
        fecha: body.fecha,
        parrafo: body.parrafo,
        materia: body.materia,
        grado: body.grado,
        profe: body.profe,
        img: req.files.img
    })

    trabajo.save((err, trabajodb) => {
        if (err) {
            return res.status(500).json({
                err
            })
        }
        res.json({
            trabajodb
        })
    })

})

module.exports = app;