const express = require('express');
const router = express.Router();
const controller = require('../controllers/criancasController');
const criancasCollection = require('../models/criancasSchema');

router.get('/', controller.getAll)
router.get('/lista',controller.getNaoApadrinhadas)
router.get('/estado', controller.getPorEstado)
router.get('/cidade', controller.getPorCidade)
router.get('/id',controller.getById)
router.post('/cadastrar',controller.addCrianca)
router.delete('/deletar/:id',controller.deleteID)
router.patch('/atualizar',controller.patchItem)

module.exports = router;