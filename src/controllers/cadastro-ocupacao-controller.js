const service = require('../services/cadastro-ocupacao-service');
module.exports = {




    inserir: async (req, res) => {
        let objectDate = new Date();


        let day = objectDate.getDate();

        let month = objectDate.getMonth() + 1;

        let year = objectDate.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        let json = { error: '', result: {} };
        console.log('insert')
        let agricultura_residencia = req.body.dados_moradia.agricultura_residencia
        let agricultura_residencia_obs = req.body.dados_moradia.agricultura_residencia_obs
        let aluguel_social = req.body.dados_moradia.aluguel_social
        let atividade_economica = req.body.dados_moradia.atividade_economica
        let atividade_economica_obs = req.body.dados_moradia.atividade_economica_obs
        let data_criacao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let data_alteracao = req.body.dados_moradia.data_alteracao
        let numero_cadastro = req.body.numero_cadastro
        let situacao = req.body.dados_moradia.situacao
        let tipo_moradia = req.body.dados_moradia.tipo_moradia
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome

        if (data_criacao && numero_cadastro && projeto_id && projeto_nome) {
            let model = await service.
                inserir(agricultura_residencia, agricultura_residencia_obs, aluguel_social, atividade_economica, atividade_economica_obs, data_criacao, data_alteracao, numero_cadastro, situacao, tipo_moradia, projeto_id, projeto_nome);
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

        let model = await service.buscarTodos();
        for (let i in model) {
            json.result.push({
                id: model[i].id,
                // nome_regional: model[i].nome_regional,
                // status_regional: model[i].status_regional,

            });
        }
        res.json(json);
    },

    atualizar: async (req, res) => {
        console.log('atualiza')
        let objectDate = new Date();


        let day = objectDate.getDate();

        let month = objectDate.getMonth() + 1;

        let year = objectDate.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        let json = { error: '', result: {} };

        let id = req.params.id;
        let agricultura_residencia = req.body.dados_moradia.agricultura_residencia
        let agricultura_residencia_obs = req.body.dados_moradia.agricultura_residencia_obs
        let aluguel_social = req.body.dados_moradia.aluguel_social
        let atividade_economica = req.body.dados_moradia.atividade_economica
        let atividade_economica_obs = req.body.dados_moradia.atividade_economica_obs
        let data_alteracao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let situacao = req.body.dados_moradia.situacao
        let tipo_moradia = req.body.dados_moradia.tipo_moradia



        db_codigo = parseInt(id)

        if (id) {
            await service.atualizar(db_codigo, agricultura_residencia, agricultura_residencia_obs, aluguel_social, atividade_economica, atividade_economica_obs, situacao, tipo_moradia, data_alteracao);
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
        let id = req.params.id;
        let numero_cadastro = req.params.numero_cadastro //para pegar o parametro
        let result = await service.buscarUm(id, numero_cadastro);
        res.json(result);


    },


}