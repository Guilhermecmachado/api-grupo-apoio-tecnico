const usuarioService = require('../services/usuarios-permissoes-service')
const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = {
    buscarUmEmail: async (req, res) => {
        let json = { error: '', result: {} };

        let email = req.body.email
        let senha = req.body.password



        let result = await usuarioService.buscarUmEmail(email, senha);
        res.json(result);
        res.json(json);
    },





    logout: async (req, res) => {
        let json = { error: '', result: {} };
        // console.log('busca um')
        let id = req.params.id; //para pegar o parametro
        let result = await ordemService.buscarUm(id);
        res.json(result);


    },
}

