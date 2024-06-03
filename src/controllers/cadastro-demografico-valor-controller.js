const service = require('../services/cadastro-demografico-valor-service');
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
        let despesas_agua = req.body.dados_despesas.despesa_agua
        let data_criacao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let data_alteracao = req.body.data_alteracao
        let numero_cadastro = req.body.numero_cadastro
        let despesas_alimentacao = req.body.dados_despesas.despesa_alimentacao
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome
        let despesas_aluguel = req.body.dados_despesas.despesa_aluguel
        let despesas_gas = req.body.dados_despesas.despesa_gas
        let despesas_luz = req.body.dados_despesas.despesa_luz
        let despesas_saude = req.body.dados_despesas.despesa_saude
        let despesas_transporte = req.body.dados_despesas.despesa_transporte
        let valor_aluguel_social = req.body.dados_despesas.valor_aluguel_social

        if (data_criacao && numero_cadastro && projeto_id && projeto_nome) {
            let model = await service.
                inserir(despesas_agua, despesas_alimentacao, despesas_aluguel, numero_cadastro, despesas_gas, projeto_id, projeto_nome, despesas_luz, despesas_saude, despesas_transporte, valor_aluguel_social, data_criacao, data_alteracao);
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
                despesas_agua: model[i].despesa_agua,
                data_criacao: model[i].data_criacao,
                data_alteracao: model[i].data_alteracao,
                numero_cadastro: req.body.numero_cadastro,
                despesas_alimentacao: model[i].dados_despesas.despesa_alimentacao,
                projeto_id: model[i].projeto_id,
                projeto_nome: model[i].projeto_nome,
                despesas_aluguel: model[i].dados_despesas.despesa_aluguel,
                despesas_gas: model[i].dados_despesas.despesa_gas,
                despesas_luz: model[i].dados_despesas.despesa_luz,
                despesas_saude: model[i].dados_despesas.despesa_saude,
                despesas_transporte: model[i].dados_despesas.despesa_transporte,
                valor_aluguel_social: model[i].dados_despesas.valor_aluguel_social,

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
        let despesas_agua = req.body.dados_despesas.despesa_agua
        let despesas_alimentacao = req.body.dados_despesas.despesa_alimentacao
        let despesas_aluguel = req.body.dados_despesas.despesa_aluguel
        let despesas_gas = req.body.dados_despesas.despesa_gas
        let despesas_luz = req.body.dados_despesas.despesa_luz
        let despesas_saude = req.body.dados_despesas.despesa_saude
        let despesas_transporte = req.body.dados_despesas.despesa_transporte
        let valor_aluguel_social = req.body.dados_despesas.valor_aluguel_social
        let data_alteracao = day.toString() + '/' + month.toString() + '/' + year.toString()



        db_codigo = parseInt(id)

        if (id) {
            await service.atualizar(db_codigo, despesas_agua, despesas_alimentacao, despesas_aluguel, despesas_gas, despesas_luz, despesas_saude, despesas_transporte, valor_aluguel_social, data_alteracao);
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