const service = require('../services/cadastro-esportes-service');
module.exports = {




    inserir: async (req, res) => {
        let objectDate = new Date();
        let valor_bairro
        let valor_entidade_recriativa
        let valor_entidade_religiosa
        let valor_movimento_luta
        let valor_outros
        let valor_partido_politico
        let valor_sindicato
        let day = objectDate.getDate();

        let month = objectDate.getMonth() + 1;

        let year = objectDate.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        let json = { error: '', result: {} };
        console.log('insert')
        let associado_bairro = req.body.dados_comunitario.associacao_bairro
        let data_criacao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let data_alteracao = req.body.data_alteracao
        let numero_cadastro = req.body.numero_cadastro
        let entidade_recriativas = req.body.dados_comunitario.entidade_recreativas
        let entidades_religiosas = req.body.dados_comunitario.entidades_religiosas
        let especifique = req.body.dados_comunitario.especifique
        let movimento_luta_moradia = req.body.dados_comunitario.movimento_luta_moradia
        let outros = req.body.dados_comunitario.outros
        let partidos_politicos = req.body.dados_comunitario.partidos_politicos
        let sindicatos = req.body.dados_comunitario.sindicatos
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome

        if (associado_bairro == true) {
            valor_bairro = 1
        } else {
            valor_bairro = 0
        }
        if (entidade_recriativas == true) {
            valor_entidade_recriativa = 1
        } else {
            valor_entidade_recriativa = 0
        }
        if (entidades_religiosas == true) {
            valor_entidade_religiosa = 1
        } else {
            valor_entidade_religiosa = 0
        }
        if (movimento_luta_moradia == true) {
            valor_movimento_luta = 1
        } else {
            valor_movimento_luta = 0
        }
        if (outros == true) {
            valor_outros = 1
        } else {
            valor_outros = 0
        }
        if (partidos_politicos == true) {
            valor_partido_politico = 1
        } else {
            valor_partido_politico = 0
        }
        if (sindicatos == true) {
            valor_sindicato = 1
        } else {
            valor_sindicato = 0
        }




        if (data_criacao && numero_cadastro && projeto_id && projeto_nome) {
            let model = await service.
                inserir(valor_bairro, data_criacao, data_alteracao, valor_entidade_recriativa, valor_entidade_religiosa, especifique, valor_movimento_luta, valor_outros, valor_partido_politico, valor_sindicato, numero_cadastro, projeto_id, projeto_nome);
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