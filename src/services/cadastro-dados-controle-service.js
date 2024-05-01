
const db = require('../../db');


module.exports = {
    inserir: (cep, cidade, complemento, contato1, contato2, data_alteracao, data_criacao, endereco, entrevistado, numero, numero_cadastro, observacoes_contato, primeiro_responsavel_trabalha, projeto_id, projeto_nome, segundo_responsavel_trabalha, tipo_contato1, tipo_contato2, uf) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastros_dados_controle (cep, cidade, complemento, contato1, contato2, data_alteracao, data_criacao, endereco, entrevistado, numero, numero_cadastro, observacoes_contato, primeiro_responsavel_trabalha, projeto_id, projeto_nome, segundo_responsavel_trabalha, tipo_contato1, tipo_contato2, uf) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [cep, cidade, complemento, contato1, contato2, data_alteracao, data_criacao, endereco, entrevistado, numero, numero_cadastro, observacoes_contato, primeiro_responsavel_trabalha, projeto_id, projeto_nome, segundo_responsavel_trabalha, tipo_contato1, tipo_contato2, uf],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastros_dados_controle t order by t.cadastro_nome', (error, results) => {
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