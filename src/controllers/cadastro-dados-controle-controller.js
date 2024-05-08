const service = require('../services/cadastro-dados-controle-service');
module.exports = {

    inserir: async (req, res) => {

        let json = { error: '', result: {} };

        console.log('insert')
        let cep = req.body.dados_controle.cep
        let cidade = req.body.dados_controle.cidade
        let complemento = req.body.dados_controle.complemento

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

        let uf = req.body.dados_controle.uf


        if (data_criacao && numero_cadastro && projeto_id && projeto_nome) {
            let model = await service.
                inserir(cep, cidade, complemento, data_alteracao, data_criacao, endereco, entrevistado, numero, numero_cadastro, observacoes_contato, primeiro_responsavel_trabalha, projeto_id, projeto_nome, segundo_responsavel_trabalha, uf);
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

    atualizar: async (req, res) => {
        let objectDate = new Date();


        let day = objectDate.getDate();

        let month = objectDate.getMonth() + 1;

        let year = objectDate.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        console.log('atualiza')
        let json = { error: '', result: {} };

        let id = req.params.id;
        let cep = req.body.dados_controle.cep
        let cidade = req.body.dados_controle.cidade
        let complemento = req.body.dados_controle.complemento
        let contato1 = req.body.dados_controle.contato1
        let contato2 = req.body.dados_controle.contato2
        let data_alteracao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let data_criacao = req.body.dados_controle.data_criacao

        let endereco = req.body.dados_controle.endereco
        let entrevistado = req.body.dados_controle.entrevistado
        let numero = req.body.dados_controle.numero

        let observacoes_contato = req.body.dados_controle.observacoes_contato
        let primeiro_responsavel_trabalha = req.body.dados_controle.primeiro_responsavel_trabalha

        let segundo_responsavel_trabalha = req.body.dados_controle.segundo_responsavel_trabalha

        let uf = req.body.dados_controle.uf



        db_codigo = parseInt(id)

        if (id) {
            await service.atualizar(db_codigo, cep, cidade, complemento, endereco, entrevistado, numero, observacoes_contato, primeiro_responsavel_trabalha, segundo_responsavel_trabalha, uf, data_criacao, data_alteracao);
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