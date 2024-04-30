const usuarioService = require('../services/usuarios-permissoes-service')
const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = {
    login: async (req, res) => {
        let json = { error: '', result: {} };

        let email = req.body.email
        let senha = req.body.senha



        if (email && senha) {

            let result = await usuarioService.verificaSeExiste(email, senha);
            if (result != false) {
                const token = jwt.sign({ userId: result.id }, 'token-instalacao')
                // console.log(token)
                json.result = {
                    'token': token,
                    'user_id': result.id,
                    'email': email
                }
                process.env.SECRET_TOKEN_KEY = token
            } else {
                json.result = {
                    'token': false
                }
            }

        } else {
            json.error = 'Campos não enviados';
        }
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

