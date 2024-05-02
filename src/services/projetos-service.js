
const db = require('../../db');


module.exports = {
    inserir: (entidade_nome, nome_projeto, codigo, programa_nome, status) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_projetos (entidade_nome, nome_projeto, codigo, programa_nome, status) VALUES (?,?,?,?,?)',
                [entidade_nome, nome_projeto, codigo, programa_nome, status],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_projetos', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, entidade_nome, nome_projeto, codigo, programa_nome, status) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_projetos SET entidade_nome = ?, nome_projeto = ?, codigo = ? ,programa_nome = ?,  status = ? WHERE id = ?',
                [entidade_nome, nome_projeto, codigo, programa_nome, status, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_projetos WHERE id = ?', [id], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results);
                } else {
                    aceito(false);
                }
            });
        });
    },
}