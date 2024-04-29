const service = require('../services/cadastro-esportes-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let associado_bairro = req.body.associado_bairro
        let data_criacao = req.body.data_criacao
        let data_alteracao = req.body.data_alteracao
        let numero_cadastro = req.body.numero_cadastro
        let entidade_recriativas = req.body.entidade_recriativas
        let entidades_religiosas = req.body.entidades_religiosas
        let especifique = req.body.especifique
        let movimento_luta_moradia = req.body.movimento_luta_moradia
        let outros = req.body.outros
        let partidos_politicos = req.body.partidos_politicos
        let sindicatos = req.body.sindicatos
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome

        if (associado_bairro && data_criacao && data_alteracao && entidade_recriativas && entidades_religiosas && especifique && movimento_luta_moradia && outros && partidos_politicos && sindicatos && numero_cadastro && projeto_id && projeto_nome) {
            let model = await service.
                inserir(associado_bairro, data_criacao, data_alteracao, entidade_recriativas, entidades_religiosas, especifique, movimento_luta_moradia, outros, partidos_politicos, sindicatos, numero_cadastro, projeto_id, projeto_nome);
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