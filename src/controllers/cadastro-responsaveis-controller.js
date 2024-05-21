const service = require('../services/cadastro-responsaveis-service');
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
        let cadastro_cohab = req.body.dados_responsavel.cadastro_cohab
        let cpf = req.body.dados_responsavel.cpf
        let data_criacao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let data_alteracao = req.body.dados_responsavel.data_alteracao
        let data_nascimento = req.body.dados_responsavel.data_nascimento
        let naturalidade = req.body.dados_responsavel.naturalidade


        let nis = req.body.dados_responsavel.nis
        let nome_completo = req.body.dados_responsavel.nome_completo
        let numero_cadastro = req.body.numero_cadastro
        let pais = req.body.dados_responsavel.pais
        let projeto_id = req.body.projeto_id
        let projeto_nome = req.body.projeto_nome
        let rg = req.body.dados_responsavel.rg
        let rg_data_expedicao = req.body.dados_responsavel.rg_data_expedicao
        let rg_uf = req.body.dados_responsavel.rg_uf
        let status_cadastro = req.body.dados_responsavel.status_cadastro
        let tipo_cadastro = req.body.dados_responsavel.tipo_cadastro
        let uf = req.body.dados_responsavel.uf
        let contato1 = req.body.dados_responsavel.contato1
        let contato2 = req.body.dados_responsavel.contato2
        let tipo_contato1 = req.body.dados_responsavel.tipo_contato1
        let tipo_contato2 = req.body.dados_responsavel.tipo_contato2
        let cpf_cnpj_fonte_pegadora = req.body.dados_responsavel.cpf_cnpj_fonte_pegadora
        let data_admissao = req.body.dados_responsavel.data_admissao
        let valor_renda_bruta = req.body.dados_responsavel.valor_renda_bruta
        let valor_renda_liquida = req.body.dados_responsavel.valor_renda_liquida
        let mes_referencia_renda = req.body.dados_responsavel.mes_referencia_renda
        let data_inicio_renda_declarada = req.body.dados_responsavel.data_inicio_renda_declarada
        let valor_renda_declarada_liquida = req.body.dados_responsavel.valor_renda_declarada_liquida
        let mes_referencia_renda_declarada = req.body.dados_responsavel.mes_referencia_renda_declarada
        let beneficio_prestacao = req.body.dados_responsavel.beneficio_prestacao
        let programa_bolsa_familia = req.body.dados_responsavel.programa_bolsa_familia
        let menor_18 = req.body.dados_responsavel.menor_18
        let nome_tutor = req.body.dados_responsavel.nome_tutor
        let cpf_tutor = req.body.dados_responsavel.cpf_tutor
        let id_menor18 = req.body.dados_responsavel.id_menor18
        let id_contato1 = req.body.dados_responsavel.id_contato1
        let id_contato2 = req.body.dados_responsavel.id_contato2
        if (data_criacao && numero_cadastro && projeto_id && projeto_nome) {
            let model = await service.
                inserir(cadastro_cohab, cpf, data_criacao, data_alteracao, data_nascimento, naturalidade, nis, nome_completo, numero_cadastro, pais, projeto_id, projeto_nome, rg, rg_data_expedicao, rg_uf, status_cadastro, tipo_cadastro, uf, contato1, contato2, tipo_contato1, tipo_contato2, cpf_cnpj_fonte_pegadora, data_admissao, valor_renda_bruta, valor_renda_liquida, mes_referencia_renda, data_inicio_renda_declarada, valor_renda_declarada_liquida, mes_referencia_renda_declarada, beneficio_prestacao, programa_bolsa_familia, menor_18, nome_tutor, cpf_tutor, id_menor18, id_contato1, id_contato2);
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
        console.log('atualiza')
        let objectDate = new Date();


        let day = objectDate.getDate();

        let month = objectDate.getMonth() + 1;

        let year = objectDate.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        let json = { error: '', result: {} };

        let id = req.params.id;
        let cadastro_cohab = req.body.dados_responsavel.cadastro_cohab
        let cpf = req.body.dados_responsavel.cpf
        let data_alteracao = day.toString() + '/' + month.toString() + '/' + year.toString()
        let data_nascimento = req.body.dados_responsavel.data_nascimento
        let naturalidade = req.body.dados_responsavel.naturalidade
        let nis = req.body.dados_responsavel.nis
        let nome_completo = req.body.dados_responsavel.nome_completo
        let pais = req.body.dados_responsavel.pais
        let rg = req.body.dados_responsavel.rg
        let rg_data_expedicao = req.body.dados_responsavel.rg_data_expedicao
        let rg_uf = req.body.dados_responsavel.rg_uf
        let status_cadastro = req.body.dados_responsavel.status_cadastro
        let tipo_cadastro = req.body.dados_responsavel.tipo_cadastro
        let uf = req.body.dados_responsavel.uf
        let contato1 = req.body.dados_responsavel.contato1
        let contato2 = req.body.dados_responsavel.contato2
        let tipo_contato1 = req.body.dados_responsavel.tipo_contato1
        let tipo_contato2 = req.body.dados_responsavel.tipo_contato2
        let cpf_cnpj_fonte_pegadora = req.body.dados_responsavel.cpf_cnpj_fonte_pegadora
        let data_admissao = req.body.dados_responsavel.data_admissao
        let valor_renda_bruta = req.body.dados_responsavel.valor_renda_bruta
        let valor_renda_liquida = req.body.dados_responsavel.valor_renda_liquida
        let mes_referencia_renda = req.body.dados_responsavel.mes_referencia_renda
        let data_inicio_renda_declarada = req.body.dados_responsavel.data_inicio_renda_declarada
        let valor_renda_declarada_liquida = req.body.dados_responsavel.valor_renda_declarada_liquida
        let mes_referencia_renda_declarada = req.body.dados_responsavel.mes_referencia_renda_declarada
        let beneficio_prestacao = req.body.dados_responsavel.beneficio_prestacao
        let programa_bolsa_familia = req.body.dados_responsavel.programa_bolsa_familia
        let menor_18 = req.body.dados_responsavel.menor_18
        let nome_tutor = req.body.dados_responsavel.nome_tutor
        let cpf_tutor = req.body.dados_responsavel.cpf_tutor
        db_codigo = parseInt(id)

        if (id) {
            await service.atualizar(db_codigo, cadastro_cohab, cpf, data_nascimento, naturalidade, nis, nome_completo, pais, rg, rg_data_expedicao, rg_uf, status_cadastro, tipo_cadastro, uf, contato1, contato2, tipo_contato1, tipo_contato2, cpf_cnpj_fonte_pegadora, data_admissao, valor_renda_bruta, valor_renda_liquida, mes_referencia_renda, data_inicio_renda_declarada, valor_renda_declarada_liquida, mes_referencia_renda_declarada, beneficio_prestacao, programa_bolsa_familia, menor_18, nome_tutor, cpf_tutor, data_alteracao);
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
        let numero_cadastro = req.params.numero_cadastro
        let tipo_cadastro = req.params.tipo_cadastro //para pegar o parametro
        let result = await service.buscarUm(id, numero_cadastro, tipo_cadastro);
        res.json(result);


    },


}