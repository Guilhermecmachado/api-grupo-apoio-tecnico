'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/loop.controller')

router.get('/', controller.atualizar)


module.exports = router
