
const db = require('../../db');


module.exports = {
    inserir: (associado_bairro, data_criacao, data_alteracao, entidade_recriativas, entidades_religiosas, especifique, movimento_luta_moradia, outros, partidos_politicos, sindicatos, numero_cadastro, projeto_id, projeto_nome) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_esporte_organizacao_comunitaria (associado_bairro, data_criacao, data_alteracao, entidade_recriativas, entidades_religiosas, especifique, movimento_luta_moradia, outros, partidos_politicos, sindicatos, numero_cadastro, projeto_id, projeto_nome) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [associado_bairro, data_criacao, data_alteracao, entidade_recriativas, entidades_religiosas, especifique, movimento_luta_moradia, outros, partidos_politicos, sindicatos, numero_cadastro, projeto_id, projeto_nome],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_esporte_organizacao_comunitaria  t order by t.cadastro_nome', (error, results) => {
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
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_esporte_organizacao_comunitaria  WHERE projeto_id = ? AND numero_cadastro=?', [id, numero_cadastro], (error, results) => {
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