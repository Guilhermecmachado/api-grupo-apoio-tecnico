
const db = require('../../db');


module.exports = {
    inserir: (cadastrador, data_criacao, data, data_alteracao, numero_cadastro, uuid, hora, projeto_id, projeto_nome, status, cadastrador_id) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_visitas (cadastrador, data_criacao, data, data_alteracao, numero_cadastro, uuid, hora, projeto_id, projeto_nome, status,cadastrador_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
                [cadastrador, data_criacao, data, data_alteracao, numero_cadastro, uuid, hora, projeto_id, projeto_nome, status, cadastrador_id],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_visitas', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, cadastrador, data, hora, status, id_visita, cadastrador_id, data_alteraca) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_visitas SET cadastrador = ?,data=? ,hora=?,status=?,id_visita=?,cadastrador_id=?,data_alteracao = ? WHERE id = ?',
                [cadastrador, data, hora, status, id_visita, cadastrador_id, data_alteraca, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_visitas  WHERE projeto_id = ? AND numero_cadastro = ?', [id, numero_cadastro], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results);
                } else {
                    aceito(false);
                }
            });
        });
    },

    buscarUmUiid: (uuid) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_visitas  WHERE uuid = ? ', [uuid], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results);
                } else {
                    aceito(false);
                }
            });
        });
    },

    buscarUmForm: (id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_visitas  WHERE id = ?', [id], (error, results) => {
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