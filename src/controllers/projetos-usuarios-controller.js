const service = require('../services/projetos-usuarios-service');
module.exports = {




    inserir: async (req, res) => {

        let json = { error: '', result: {} };
        console.log('insert')
        let projeto_codigo = req.body.nome_projeto
        let usuario_id = req.body.codigo
        let projeto_id = req.body.programa_nome
        let projeto_nome = req.body.status



        if (projeto_codigo && usuario_id && projeto_id && projeto_nome) {
            let model = await service.
                inserir(projeto_codigo, projeto_nome, usuario_id, projeto_id);
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
        let id = req.params.id
        let model = await service.buscarTodos(id);
        for (let i in model) {
            json.result.push({
                id: model[i].id,
                projeto_nome: model[i].projeto_nome,
                projeto_codigo: model[i].projeto_codigo,
                usuario_id: model[i].usuario_id,
                projeto_id: model[i].projeto_id

            });
        }
        res.json(json);
    },

    atualizar: async (req, res) => {
        console.log('atualiza')
        let json = { error: '', result: {} };

        let id = req.params.id;
        let projeto_codigo = req.body.nome_projeto
        let usuario_id = req.body.codigo
        let projeto_id = req.body.programa_nome
        let projeto_nome = req.body.status

        db_codigo = parseInt(id)

        if (id && nome_regional && status_regional) {
            await service.atualizar(db_codigo, projeto_codigo, projeto_nome, usuario_id, projeto_id);
            json.result = {
                id,
                nome_regional,

            };
        } else {
            json.error = 'Os campos não foram enviados';
        }
        res.json(json);
    },

    // buscarUm: async (req, res) => {
    //     let json = { error: '', result: {} };
    //     //  console.log('buscam um')
    //     let id = req.params.id; //para pegar o parametro
    //     let result = await service.buscarUm(id);
    //     res.json(result);


    // },


}