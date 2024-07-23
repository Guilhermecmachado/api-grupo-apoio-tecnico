
const db = require('../../db');


module.exports = {
    inserir: (data_criacao, data_alteracao, forma_coleta, numero_cadastro, separacao_material_reciclavel, projeto_id, projeto_nome, cadastrador_id, status_online) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_sustentabilidade (data_criacao, data_alteracao, forma_coleta, numero_cadastro, separacao_material_reciclavel, projeto_id, projeto_nome,cadastrador_id,status_online) VALUES (?,?,?,?,?,?,?,?,?)',
                [data_criacao, data_alteracao, forma_coleta, numero_cadastro, separacao_material_reciclavel, projeto_id, projeto_nome, cadastrador_id, status_online],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_sustentabilidade ', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, forma_coleta, separacao_material_reciclavel, cadastrador_id, status_online, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_sustentabilidade SET forma_coleta =?, separacao_material_reciclavel=?,cadastrador_id=?, status_online=?,data_alteracao=? WHERE id = ?',
                [forma_coleta, separacao_material_reciclavel, cadastrador_id, status_online, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_sustentabilidade  WHERE projeto_id = ? AND numero_cadastro =?', [id, numero_cadastro], (error, results) => {
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