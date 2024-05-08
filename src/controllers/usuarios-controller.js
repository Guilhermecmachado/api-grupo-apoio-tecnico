const service = require('../services/usuarios-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let agencia = req.body.agencia
        let nome = req.body.nome
        let email = req.body.email
        let banco = req.body.banco
        let conta_corrente = req.body.conta_corrente
        let cpf = req.body.cpf
        let password = req.body.password
        let perfil = req.body.perfil
        let pix = req.body.pix



        if (nome && email && cpf && password && perfil) {
            let model = await service.
                inserir(agencia, nome, email, banco, conta_corrente, cpf, password, perfil, pix);
            json.result = {
                id: model,
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };
        let model = await service.buscarTodosUsuario();
        for (let i in model) {
            json.result.push({
                id: model[i].id,
                nome: model[i].nome,
                email: model[i].email,

            });
        }
        res.json(json);
    },

    atualizar: async (req, res) => {
        console.log('atualiza')
        let json = { error: '', result: {} };

        let id = req.params.id;
        let agencia = req.body.agencia
        let nome = req.body.nome
        let email = req.body.email
        let banco = req.body.banco
        let conta_corrente = req.body.conta_corrente
        let cpf = req.body.cpf
        let password = req.body.password
        let perfil = req.body.perfil
        let pix = req.body.pix




        db_codigo = parseInt(id)

        if (id) {
            await service.atualizar(db_codigo, agencia, nome, email, banco, conta_corrente, cpf, password, perfil, pix);
            json.result = {
                id,

            };
        } else {
            json.error = 'Os campos não foram enviados';
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };
        //  console.log('buscam um')
        let id = req.params.id; //para pegar o parametro
        let result = await service.buscarUmUsuario(id);
        res.json(result);


    },


}