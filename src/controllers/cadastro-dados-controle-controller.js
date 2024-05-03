const service = require('../services/cadastro-dados-controle-service');
module.exports = {

    inserir: async (req, res) => {

        let json = { error: '', result: {} };

        console.log('insert')
        let cep = req.body.dados_controle.cep
        let cidade = req.body.dados_controle.cidade
        let complemento = req.body.dados_controle.complemento
        let contato1 = req.body.dados_controle.contato1
        let contato2 = req.body.dados_controle.contato2
        let data_alteracao = req.body.dados_controle.data_alteracao
        let data_criacao = req.body.dados_controle.data_criacao
        let endereco = req.body.dados_controle.endereco
        let entrevistado = req.body.dados_controle.entrevistado
        let numero = req.body.dados_controle.numero
        let numero_cadastro = req.body.numero_cadastro
        let observacoes_contato = req.body.dados_controle.observacoes_contato
        let primeiro_responsavel_trabalha = req.body.dados_controle.primeiro_responsavel_trabalha
        let projeto_nome = req.body.projeto_nome
        let projeto_id = req.body.projeto_id
        let segundo_responsavel_trabalha = req.body.dados_controle.segundo_responsavel_trabalha
        let tipo_contato1 = req.body.dados_controle.tipo_contato1
        let tipo_contato2 = req.body.dados_controle.tipo_contato2
        let uf = req.body.dados_controle.uf


        if (cep && cidade && contato1 && contato2 && data_criacao && endereco && entrevistado && numero && numero_cadastro && primeiro_responsavel_trabalha && projeto_id && projeto_nome && segundo_responsavel_trabalha && tipo_contato1 && tipo_contato2 && uf) {
            let model = await service.
                inserir(cep, cidade, complemento, contato1, contato2, data_alteracao, data_criacao, endereco, entrevistado, numero, numero_cadastro, observacoes_contato, primeiro_responsavel_trabalha, projeto_id, projeto_nome, segundo_responsavel_trabalha, tipo_contato1, tipo_contato2, uf);
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
        let id = req.params.id;
        let numero_cadastro = req.params.numero_cadastro //para pegar o parametro
        let result = await service.buscarUm(id, numero_cadastro);
        res.json(result);


    },


}