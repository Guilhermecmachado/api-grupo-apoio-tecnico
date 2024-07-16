'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/cadastros-controller')

require('dotenv/config')



router.post('/', controller.inserir)
router.get('/', controller.buscarTodos)
router.get('/:id', controller.buscarUm)
router.get('/numero_cadastro/:numero_cadastro', controller.buscarUmApp)
router.get('/form/:id', controller.buscarUmForm)
router.get('/:id/:numero_cadastro', controller.buscarUmCadastro)
router.get('/cadastros_dados/:numero_cadastro/:nome_tabela', controller.buscarCadastros)
// router.get('/cadastros_dados/:numero_cadastro/:nome_tabela/cadastrador/:id', controller.buscarCadastrosCadastrador)
router.get('/cadastros_dados/:numero_cadastro/:nome_tabela/:tipo_cadastro', controller.buscarCadastrosResponsavel)

router.post('/:id', controller.atualizar)


module.exports = router

