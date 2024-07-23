
const db = require('../../db');


module.exports = {
    inserir: (maria_penha, data_criacao, data_alteracao, numero_cadastro, projeto_id, projeto_nome, cadastrador_id, status_online) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_violencia_maria (maria_penha, data_criacao, data_alteracao, numero_cadastro, projeto_id, projeto_nome,cadastrador_id,status_online) VALUES (?,?,?,?,?,?,?,?)',
                [maria_penha, data_criacao, data_alteracao, numero_cadastro, projeto_id, projeto_nome, cadastrador_id, status_online],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_violencia_maria', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, maria_penha, cadastrador_id, status_online, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_violencia_maria SET  maria_penha=?, cadastrador_id=?,status_online=?,data_alteracao=? WHERE id = ?',
                [maria_penha, cadastrador_id, status_online, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_violencia_maria  WHERE projeto_id = ? AND numero_cadastro =?', [id, numero_cadastro], (error, results) => {
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