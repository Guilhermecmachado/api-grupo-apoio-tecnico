
const db = require('../../db');


module.exports = {
    inserir: (nome, codigo, status, grupo, id_grupo) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_dominios (nome, codigo, status, grupo, id_grupo) VALUES (?,?,?,?,?)',
                [nome, codigo, status, grupo, id_grupo],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_dominios', (error, results) => {
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

            db.query('SELECT * FROM gta_dominios WHERE id = ?', [id], (error, results) => {
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