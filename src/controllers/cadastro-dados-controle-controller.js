const service = require('../services/cadastro-dados-controle-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let cep = req.body.cep
        let cidade = req.body.cidade
        let complemento = req.body.complemento
        let contato1 = req.body.contato1
        let contato2 = req.body.contato2
        let data_alteracao = req.body.data_alteracao
        let data_criacao = req.body.data_criacao
        let endereco = req.body.endereco
        let entrevistado = req.body.entrevistado
        let numero = req.body.numero
        let numero_cadastro = req.body.numero_cadastro
        let observacoes_contato = req.body.observacoes_contato
        let primeiro_responsavel_trabalha = req.body.primeiro_responsavel_trabalha
        let projeto_nome = req.body.projeto_nome
        let projeto_id = req.body.projeto_id
        let segundo_responsavel_trabalha = req.body.segundo_responsavel_trabalha
        let tipo_contato1 = req.body.tipo_contato1
        let tipo_contato2 = req.body.tipo_contato2
        let uf = req.body.uf


        if (cep && cidade && complemento && contato1 && contato2 && data_alteracao && data_criacao && endereco && entrevistado && numero && numero_cadastro && observacoes_contato && primeiro_responsavel_trabalha && projeto_id && projeto_nome && segundo_responsavel_trabalha && tipo_contato1 && tipo_contato2 && uf) {
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
        let id = req.params.id; //para pegar o parametro
        let result = await service.buscarUm(id);
        res.json(result);


    },


}