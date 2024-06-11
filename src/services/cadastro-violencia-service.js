
const db = require('../../db');


module.exports = {
    inserir: (motivo, motivo_outros, idade, data_criacao, data_alteracao, numero_cadastro, uuid, ano, projeto_id, projeto_nome, id_motivo) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_violencia (motivo, motivo_outros, idade, data_criacao, data_alteracao, numero_cadastro, uuid, ano, projeto_id, projeto_nome,id_motivo) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
                [motivo, motivo_outros, idade, data_criacao, data_alteracao, numero_cadastro, uuid, ano, projeto_id, projeto_nome, id_motivo],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_violencia ', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUmUiid: (uuid) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_violencia  WHERE uuid = ? ', [uuid], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results);
                } else {
                    aceito(false);
                }
            });
        });
    },

    atualizar: (id, motivo, motivo_outros, idade, ano, id_motivo, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_violencia SET motivo = ?,motivo_outros=?,idade=?,ano=?,id_motivo=?, data_alteracao = ? WHERE id = ?',
                [motivo, motivo_outros, idade, ano, id_motivo, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_violencia  WHERE projeto_id = ? AND numero_cadastro=?', [id, numero_cadastro], (error, results) => {
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

            db.query('SELECT * FROM gta_cadastro_violencia  WHERE id = ?', [id], (error, results) => {
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