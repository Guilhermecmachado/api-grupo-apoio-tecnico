'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/projetos-usuarios-controller')

require('dotenv/config')



router.post('/', controller.inserir)
router.get('/:id', controller.buscarTodos)
// router.get('/:id', controller.buscarUm)
router.post('/:id', controller.atualizar)


module.exports = router

