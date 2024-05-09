'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarios-controller')

require('dotenv/config')



router.post('/', controller.inserir)
router.post('/usuario/permissao', controller.inserirPermissaoUsuario)
router.get('/', controller.buscarTodos)
router.get('/permissao', controller.buscarTodosPermissao)
router.get('/:id', controller.buscarUm)
router.get('/:id/:rota_id', controller.buscarUmUsuarioPermissao)
router.get('/permissao-usuario/:id', controller.buscarUsuarioPermissao)
router.post('/:id', controller.atualizar)
router.post('/:id/permissao', controller.atualizarPermissao)


module.exports = router

