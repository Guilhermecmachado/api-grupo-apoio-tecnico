const service = require('../services/cadastro-demografico-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let beneficios = req.body.beneficios
        let beneficios_valor = req.body.beneficios_valor
        let curso_frequenta = req.body.curso_frequenta
        let data_alteracao = req.body.data_alteracao
        let data_criacao = req.body.data_criacao
        let estado_civil = req.body.estado_civil
        let estudou_ate = req.body.estudou_ate
        let frequenta_escola = req.body.frequenta_escola
        let genero = req.body.genero
        let grupo_etnico = req.body.grupo_etnico
        let idade = req.body.idade
        let numero_cadastro = req.body.numero_cadastro
        let nome_completo = req.body.nome_completo
        let outra_fonte_renda = req.body.outra_fonte_renda
        let outra_fonte_renda_valor = req.body.outra_fonte_renda_valor
        let pne = req.body.pne
        let posicao_familiar = req.body.posicao_familiar
        let profissao = req.body.profissao
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome
        let renda_principal = req.body.renda_principal
        let renda_principal_valor = req.body.renda_principal_valor
        let situacao_ocupacional = req.body.situacao_ocupacional
        let uuid = req.body.uuid



        if (data_criacao && numero_cadastro && projeto_id && projeto_nome) {
            let model = await service.
                inserir(beneficios, beneficios_valor, curso_frequenta, data_alteracao, data_criacao, estado_civil, estudou_ate, frequenta_escola, genero, grupo_etnico, idade, nome_completo, outra_fonte_renda, outra_fonte_renda_valor, pne, posicao_familiar, profissao, projeto_id, projeto_nome, renda_principal, renda_principal_valor, situacao_ocupacional, uuid, numero_cadastro);
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