
const db = require('../../db');


module.exports = {
    inserir: (cep, cidade, complemento, data_alteracao, data_criacao, endereco, entrevistado, numero, numero_cadastro, observacoes_contato, primeiro_responsavel_trabalha, projeto_id, projeto_nome, segundo_responsavel_trabalha, uf) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastros_dados_controle (cep, cidade, complemento, data_alteracao, data_criacao, endereco, entrevistado, numero, numero_cadastro, observacoes_contato, primeiro_responsavel_trabalha, projeto_id, projeto_nome, segundo_responsavel_trabalha, uf) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [cep, cidade, complemento, data_alteracao, data_criacao, endereco, entrevistado, numero, numero_cadastro, observacoes_contato, primeiro_responsavel_trabalha, projeto_id, projeto_nome, segundo_responsavel_trabalha, uf],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastros_dados_controle ', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, cep, cidade, complemento, endereco, entrevistado, numero, observacoes_contato, primeiro_responsavel_trabalha, segundo_responsavel_trabalha, uf, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastros_dados_controle SET cep=?, cidade=?, complemento=?, endereco=?, entrevistado=?, numero=?, observacoes_contato=?, primeiro_responsavel_trabalha=?, segundo_responsavel_trabalha=?, uf=?, data_alteracao=? WHERE id = ?',
                [cep, cidade, complemento, endereco, entrevistado, numero, observacoes_contato, primeiro_responsavel_trabalha, segundo_responsavel_trabalha, uf, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastros_dados_controle WHERE projeto_id = ? AND numero_cadastro=?', [id, numero_cadastro], (error, results) => {
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