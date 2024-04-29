const service = require('../services/cadastro-ocupacao-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let agricultura_residencia = req.body.forma_coleta
        let agricultura_residencia_obs = req.body.data_criacao
        let aluguel_social = req.body.data_alteracao
        let atividade_economica = req.body.numero_cadastro
        let atividade_economica_obs = req.body.separacao_material_reciclavel
        let data_criacao = req.body.data_criacao
        let data_alteracao = req.body.data_alteracao
        let numero_cadastro = req.body.numero_cadastro
        let situacao = req.body.situacao
        let tipo_moradia = req.body.tipo_moradia
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome

        if (agricultura_residencia && agricultura_residencia_obs && aluguel_social && atividade_economica && atividade_economica_obs && data_alteracao && numero_cadastro && situacao && tipo_moradia && projeto_id && projeto_nome) {
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

    // atualizar: async (req, res) => {
    //     console.log('atualiza')
    //     let json = { error: '', result: {} };

    //     let id = req.params.id;
    //     let nome_regional = req.body.nome_regional;
    //     let status_regional = req.body.status_regional;

    //     let db_status = 0
    //     if (status_regional == '0')
    //         db_status = 0
    //     else
    //         db_status = 1

    //     db_codigo = parseInt(id)

    //     if (id && nome_regional && status_regional) {
    //         await regionalInstalacaoService.atualizar(db_codigo, nome_regional, db_status);
    //         json.result = {
    //             id,
    //             nome_regional,

    //         };
    //     } else {
    //         json.error = 'Os campos não foram enviados';
    //     }
    //     res.json(json);
    // },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };
        //  console.log('buscam um')
        let id = req.params.id; //para pegar o parametro
        let result = await service.buscarUm(id);
        res.json(result);


    },


}