const service = require('../services/cadastro-mobilidade-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let forma_transporte = req.body.forma_transporte
        let forma_transporte_outro = req.body.forma_transporte_outro
        let possui_veiculo_carro = req.body.possui_veiculo_carro
        let possui_veiculo_moto = req.body.possui_veiculo_moto
        let possui_veiculo_caminhao = req.body.possui_veiculo_caminhao
        let possui_veiculo_caminhao_suv = req.body.possui_veiculo_caminhao_suv
        let regiao_trabalho = req.body.regiao_trabalho
        let data_criacao = req.body.data_criacao
        let data_alteracao = req.body.data_alteracao
        let numero_cadastro = req.body.numero_cadastro
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome

        if (data_criacao && data_alteracao && forma_transporte && forma_transporte_outro && numero_cadastro && possui_veiculo_caminhao && possui_veiculo_caminhao_suv && possui_veiculo_carro && possui_veiculo_moto && regiao_trabalho && projeto_id && projeto_nome) {
            let model = await service.
                inserir(data_criacao, data_alteracao, forma_transporte, forma_transporte_outro, numero_cadastro, possui_veiculo_caminhao, possui_veiculo_caminhao_suv, possui_veiculo_carro, possui_veiculo_moto, regiao_trabalho, projeto_id, projeto_nome);
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
        let numero_cadastro = req.params.numero_cadastro//para pegar o parametro
        let result = await service.buscarUm(id, numero_cadastro);
        res.json(result);


    },


}