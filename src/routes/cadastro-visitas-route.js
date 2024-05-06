'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/cadastro-visitas-controller')

require('dotenv/config')



router.post('/', controller.inserir)
router.get('/', controller.buscarTodos)
router.get('/:id/:numero_cadastro', controller.buscarUm)
router.get('/:id/:numero_cadastro/form', controller.buscarUmForm)
router.post('/:id', controller.atualizar)


module.exports = router

