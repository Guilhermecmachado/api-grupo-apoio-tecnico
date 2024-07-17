
const db = require('../../db');


module.exports = {
    inserir: (atividade, data_alteracao, data_criacao, numero_cadastro, tipo_atividade, tipo_atividade2, tipo_atividade4, tipo_atividade3, projeto_id, projeto_nome, cadastrador_id) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_lazer (atividade, data_alteracao, data_criacao, numero_cadastro, tipo_atividade, tipo_atividade2, tipo_atividade4, tipo_atividade3, projeto_id, projeto_nome,cadastrador_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
                [atividade, data_alteracao, data_criacao, numero_cadastro, tipo_atividade, tipo_atividade2, tipo_atividade4, tipo_atividade3, projeto_id, projeto_nome, cadastrador_id],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_lazer ', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, atividade, tipo_atividade, tipo_atividade2, tipo_atividade3, tipo_atividade4, cadastrador_id, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_lazer SET  atividade =?, tipo_atividade=?, tipo_atividade2=?, tipo_atividade3=?, tipo_atividade4=?, cadastrador_id=?,data_alteracao=? WHERE id = ?',
                [atividade, tipo_atividade, tipo_atividade2, tipo_atividade3, tipo_atividade4, cadastrador_id, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_lazer  WHERE projeto_id = ? AND numero_cadastro=?', [id, numero_cadastro], (error, results) => {
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