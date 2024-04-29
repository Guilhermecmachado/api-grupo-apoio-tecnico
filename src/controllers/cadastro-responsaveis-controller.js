const service = require('../services/cadastro-responsaveis-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let cadastro_cohab = req.body.forma_coleta
        let cpf = req.body.cpf
        let data_criacao = req.body.data_criacao
        let data_alteracao = req.body.data_alteracao
        let data_nascimento = req.body.data_nascimento
        let naturalidade = req.body.naturalidade
        let nis = req.body.nis
        let nome_completo = req.body.nome_completo
        let numero_cadastro = req.body.numero_cadastro
        let pais = req.body.pais
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome
        let rg = req.body.rg
        let rg_data_expedicao = req.body.rg_data_expedicao
        let rg_uf = req.body.rg_uf
        let status_cadastro = req.body.status_cadastro
        let tipo_cadastro = req.body.tipo_cadastro
        let uf = req.body.uf

        if (cadastro_cohab && cpf && data_criacao && data_alteracao && data_nascimento && naturalidade && nis && nome_completo && numero_cadastro && pais && projeto_id && projeto_nome && rg && rg_data_expedicao && rg_uf && status_cadastro && tipo_cadastro && uf) {
            let model = await service.
                inserir(cadastro_cohab, cpf, data_criacao, data_alteracao, data_nascimento, naturalidade, nis, nome_completo, numero_cadastro, pais, projeto_id, projeto_nome, rg, rg_data_expedicao, rg_uf, status_cadastro, tipo_cadastro, uf);
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