const express = require('express');
const router = express.Router();
const controller = require('../controllers/criancasController')

router.get("/",function(request,response){
    response.status(200).send({
        titulo: "Bem-Vinda(o) ao Projeto 'Apadrinhe Uma Criança' - Raphaela",
        version: "1.0.0"
    })
})

module.exports = router;