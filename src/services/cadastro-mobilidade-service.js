
const db = require('../../db');


module.exports = {
    inserir: (data_criacao, data_alteracao, forma_transporte, forma_transporte_outro, numero_cadastro, possui_veiculo_caminhao, possui_veiculo_caminhao_suv, possui_veiculo_carro, possui_veiculo_moto, regiao_trabalho, projeto_id, projeto_nome) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_mobilidade_urbana (data_criacao, data_alteracao, forma_transporte, forma_transporte_outro, numero_cadastro, possui_veiculo_caminhao, possui_veiculo_caminhao_suv, possui_veiculo_carro, possui_veiculo_moto, regiao_trabalho, projeto_id, projeto_nome) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
                [data_criacao, data_alteracao, forma_transporte, forma_transporte_outro, numero_cadastro, possui_veiculo_caminhao, possui_veiculo_caminhao_suv, possui_veiculo_carro, possui_veiculo_moto, regiao_trabalho, projeto_id, projeto_nome],
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
    // atualizar: (id, nome_regional, status_regional) => {
    //     return new Promise((aceito, rejeitado) => {
    //         db.query('UPDATE tb_regionais SET nome_regional = ?, status_regional = ? WHERE id = ?',
    //             [nome_regional, status_regional, id],
    //             (error, results) => {
    //                 if (error) { rejeitado(error); return; }
    //                 aceito(results);
    //             }
    //         );
    //     });
    // },
    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_mobilidade_urbana  WHERE id = ?', [id], (error, results) => {
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