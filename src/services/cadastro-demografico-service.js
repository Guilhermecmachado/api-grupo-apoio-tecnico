
const db = require('../../db');


module.exports = {
    inserir: (beneficios, beneficios_valor, curso_frequenta, data_alteracao, data_criacao, estado_civil, estudou_ate, frequenta_escola, genero, grupo_etnico, idade, nome_completo, outra_fonte_renda, outra_fonte_renda_valor, pne, posicao_familiar, profissao, projeto_id, projeto_nome, renda_principal, renda_principal_valor, situacao_ocupacional, uuid, numero_cadastro) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_demografico_socio_economico (beneficios, beneficios_valor, curso_frequenta, data_alteracao, data_criacao, estado_civil, estudou_ate, frequenta_escola, genero, grupo_etnico, idade, nome_completo, outra_fonte_renda, outra_fonte_renda_valor, pne, posicao_familiar, profissao, projeto_id, projeto_nome, renda_principal, renda_principal_valor, situacao_ocupacional, uuid, numero_cadastro) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [beneficios, beneficios_valor, curso_frequenta, data_alteracao, data_criacao, estado_civil, estudou_ate, frequenta_escola, genero, grupo_etnico, idade, nome_completo, outra_fonte_renda, outra_fonte_renda_valor, pne, posicao_familiar, profissao, projeto_id, projeto_nome, renda_principal, renda_principal_valor, situacao_ocupacional, uuid, numero_cadastro],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_demografico_socio_economico ', (error, results) => {
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

            db.query('SELECT * FROM gta_cadastro_demografico_socio_economico WHERE id = ?', [id], (error, results) => {
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