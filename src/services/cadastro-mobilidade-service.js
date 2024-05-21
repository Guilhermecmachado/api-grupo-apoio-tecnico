
const db = require('../../db');


module.exports = {
    inserir: (data_criacao, data_alteracao, forma_transporte, forma_transporte_outro, numero_cadastro, possui_veiculo_caminhao, possui_veiculo_caminhao_suv, possui_veiculo_carro, possui_veiculo_moto, regiao_trabalho, projeto_id, projeto_nome, id_transporte, id_regiao) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_mobilidade_urbana (data_criacao, data_alteracao, forma_transporte, forma_transporte_outro, numero_cadastro, possui_veiculo_caminhao, possui_veiculo_caminhonete_suv, possui_veiculo_carro, possui_veiculo_moto, regiao_trabalho, projeto_id, projeto_nome,id_transporte,id_regiao) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [data_criacao, data_alteracao, forma_transporte, forma_transporte_outro, numero_cadastro, possui_veiculo_caminhao, possui_veiculo_caminhao_suv, possui_veiculo_carro, possui_veiculo_moto, regiao_trabalho, projeto_id, projeto_nome, id_transporte, id_regiao],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_mobilidade_urbana  t order by t.cadastro_nome', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, valor_carro, valor_caminhao, valor_caminhao_suv, valor_moto, forma_transporte, forma_transporte_outro, regiao_trabalho, id_transporte, id_regiao, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_mobilidade_urbana SET possui_veiculo_carro=?, possui_veiculo_caminhao=?, possui_veiculo_caminhonete_suv=?, possui_veiculo_moto=?,forma_transporte=?, forma_transporte_outro=?, regiao_trabalho=?,id_transporte=?,id_regiao=?, data_alteracao=? WHERE id = ?',
                [valor_carro, valor_caminhao, valor_caminhao_suv, valor_moto, forma_transporte, forma_transporte_outro, regiao_trabalho, id_transporte, id_regiao, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_mobilidade_urbana  WHERE projeto_id = ? AND numero_cadastro =?', [id, numero_cadastro], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },
}