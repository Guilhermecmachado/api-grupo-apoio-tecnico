const service = require('../services/cadastros-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let cadastro_id = req.body.cadastrador_id
        let cadastro_nome = req.body.cadastrador_nome
        let data_criacao = req.body.data_criacao
        let numero_cadastro = req.body.numero_cadastro
        let primeiro_responsavel = req.body.primeiro_responsavel
        let projeto_codigo = req.body.projeto_codigo
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome
        let status = req.body.status

        if (cadastro_id && cadastro_nome && data_criacao && numero_cadastro && projeto_codigo && projeto_id && projeto_nome && status) {
            let model = await service.
                inserir(cadastro_id, cadastro_nome, data_criacao, numero_cadastro, primeiro_responsavel, projeto_codigo, projeto_id, projeto_nome, status);
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
                numero_cadastro: model[i].numero_cadastro,
                cadastrador_nome: model[i].cadastrador_nome,
                data_criacao: model[i].data_criacao,
                primeiro_responsavel: model[i].primeiro_responsavel

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