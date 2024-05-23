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

        if (cadastro_id && data_criacao && numero_cadastro && projeto_codigo && projeto_id && projeto_nome && status) {
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
                primeiro_responsavel: model[i].primeiro_responsavel,
                cadastrador_nome: model[i].cadastrador_nome,
                cadastrador_id: model[i].cadastrador_id,
                primeiro_responsavel: model[i].primeiro_responsavel,
                projeto_codigo: model[i].projeto_codigo,
                projeto_id: model[i].projeto_id,
                projeto_nome: model[i].projeto_nome,
                status: model[i].status


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
        let cadastro_id = req.body.cadastrador_id
        let cadastro_nome = req.body.cadastrador_nome
        let data_alteracao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let numero_cadastro = req.body.numero_cadastro
        let primeiro_responsavel = req.body.primeiro_responsavel
        let projeto_codigo = req.body.projeto_codigo
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome
        let status = req.body.status


        db_codigo = parseInt(id)

        if (id) {
            await regionalInstalacaoService.atualizar(db_codigo, cadastro_id, cadastro_nome, data_alteracao, numero_cadastro, primeiro_responsavel, projeto_codigo, projeto_id, projeto_nome, status);
            json.result = {
                id,

            };
        } else {
            json.error = 'Os campos não foram enviados';
        }
        res.json(json);
    },

    buscarUmCadastro: async (req, res) => {
        let json = { error: '', result: {} };
        //  console.log('buscam um')
        let id = req.params.id;
        let numero_cadastro = req.params.numero_cadastro //para pegar o parametro
        let result = await service.buscarUmCadastro(id, numero_cadastro);
        res.json(result);


    },

    buscarCadastros: async (req, res) => {
        let json = { error: '', result: {} };
        //  console.log('buscam um')
        let nome_tabela = req.params.nome_tabela;
        let numero_cadastro = req.params.numero_cadastro
        //para pegar o parametro
        let result = await service.buscarCadastros(nome_tabela, numero_cadastro);
        res.json(result);


    },

    buscarCadastrosResponsavel: async (req, res) => {
        let json = { error: '', result: {} };
        //  console.log('buscam um')
        let nome_tabela = req.params.nome_tabela;
        let numero_cadastro = req.params.numero_cadastro
        let tipo_cadastro = req.params.tipo_cadastro
        //para pegar o parametro
        let result = await service.buscarCadastrosResponsavel(nome_tabela, numero_cadastro, tipo_cadastro);
        res.json(result);


    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };
        //  console.log('buscam um')
        let id = req.params.id;
        let id_number = parseInt(id)
        let codigo = req.params.id
        //para pegar o parametro
        let result = await service.buscarUm(codigo);
        res.json(result);


    },

    buscarUmApp: async (req, res) => {
        let json = { error: '', result: {} };
        //  console.log('buscam um')
        let numero_cadastro = req.params.numero_cadastro;

        //para pegar o parametro
        let result = await service.buscarUmApp(numero_cadastro);
        res.json(result);


    },

    buscarUmForm: async (req, res) => {
        let json = { error: '', result: {} };
        //  console.log('buscam um')
        let id = req.params.id;
        let id_number = parseInt(id)
        //para pegar o parametro
        let result = await service.buscarUmForm(id_number);
        res.json(result);


    },


}