const service = require('../services/cadastro-sustentabilidade-service');
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
        let forma_coleta = req.body.dados_sustentabilidade.forma_coleta
        let data_criacao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let data_alteracao = req.body.dados_sustentabilidade.data_alteracao
        let numero_cadastro = req.body.numero_cadastro
        let separacao_material_reciclavel = req.body.dados_sustentabilidade.separacao_material_reciclavel
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome
        let id_sustentabilidade = req.body.id_sustentabilidade
        if (data_criacao && numero_cadastro && projeto_id && projeto_nome) {
            let model = await service.
                inserir(data_criacao, data_alteracao, forma_coleta, numero_cadastro, separacao_material_reciclavel, projeto_id, projeto_nome, id_sustentabilidade);
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
        let forma_coleta = req.body.dados_sustentabilidade.forma_coleta
        let data_alteracao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let separacao_material_reciclavel = req.body.dados_sustentabilidade.separacao_material_reciclavel



        db_codigo = parseInt(id)

        if (id) {
            await service.atualizar(db_codigo, forma_coleta, separacao_material_reciclavel, data_alteracao);
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