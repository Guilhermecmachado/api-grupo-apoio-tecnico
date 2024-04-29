
const db = require('../../db');


module.exports = {
    inserir: (animal_moradia, data_alteracao, data_criacao, numero_cadastro, projeto_id, projeto_nome, id) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_animal_moradia (animal_moradia, data_alteracao, data_criacao, numero_cadastro, projeto_id, projeto_nome, id) VALUES (?,?,?,?,?,?,?)',
                [animal_moradia, data_alteracao, data_criacao, numero_cadastro, projeto_id, projeto_nome, id],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_animal_moradia', (error, results) => {
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

            db.query('SELECT * FROM gta_cadastro_animal_moradia WHERE id = ?', [id], (error, results) => {
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