
const db = require('../../db');


module.exports = {
    inserir: (data_criacao, data_alteracao, valor_documento1, valor_documento2, valor_documento3, valor_documento4, valor_documento5, valor_documento6, valor_documento7, valor_documento8, valor_documento9, valor_documento10, valor_documento11, projeto_id, projeto_nome, numero_cadastro) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_documento (data_criacao, data_alteracao, documento1, documento2, documento3, documento4, documento5, documento6, documento7, documento8, documento9, documento10, documento11, projeto_id, projeto_nome, numero_cadastro) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [data_criacao, data_alteracao, valor_documento1, valor_documento2, valor_documento3, valor_documento4, valor_documento5, valor_documento6, valor_documento7, valor_documento8, valor_documento9, valor_documento10, valor_documento11, projeto_id, projeto_nome, numero_cadastro],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_documento  t order by t.cadastro_nome', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, valor_documento1, valor_documento2, valor_documento3, valor_documento4, valor_documento5, valor_documento6, valor_documento7, valor_documento8, valor_documento9, valor_documento10, valor_documento11, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_documento SET documento1=?, documento2=?, documento3=?, documento4=?, documento5=?, documento6=?, documento7=?, documento8=?, documento9=?, documento10=?, documento11=?, data_alteracao=? WHERE id = ?',
                [valor_documento1, valor_documento2, valor_documento3, valor_documento4, valor_documento5, valor_documento6, valor_documento7, valor_documento8, valor_documento9, valor_documento10, valor_documento11, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_documento  WHERE projeto_id = ? AND numero_cadastro =?', [id, numero_cadastro], (error, results) => {
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