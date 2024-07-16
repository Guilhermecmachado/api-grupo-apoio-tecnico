
const db = require('../../db');


module.exports = {
    inserir: (despesas_agua, despesas_alimentacao, despesas_aluguel, numero_cadastro, despesas_gas, projeto_id, projeto_nome, despesas_luz, despesas_saude, despesas_transporte, valor_aluguel_social, data_criacao, data_alteracao, cadastrador_id) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_demografico_valores (despesa_agua, despesa_alimentacao, despesa_aluguel, numero_cadastro, despesa_gas, projeto_id, projeto_nome, despesa_luz, despesa_saude, despesa_transporte, valor_aluguel_social, data_criacao, data_alteracao,cadastrador_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [despesas_agua, despesas_alimentacao, despesas_aluguel, numero_cadastro, despesas_gas, projeto_id, projeto_nome, despesas_luz, despesas_saude, despesas_transporte, valor_aluguel_social, data_criacao, data_alteracao, cadastrador_id],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_demografico_valores ', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, despesas_agua, despesas_alimentacao, despesas_aluguel, despesas_gas, despesas_luz, despesas_saude, despesas_transporte, valor_aluguel_social, cadastrador_id, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_demografico_valores SET despesa_agua=?, despesa_alimentacao=?, despesa_aluguel=?, despesa_gas=?, despesa_luz=?, despesa_saude=?, despesa_transporte=?, valor_aluguel_social=?, cadastrador_id,data_alteracao=? WHERE id = ?',
                [despesas_agua, despesas_alimentacao, despesas_aluguel, despesas_gas, despesas_luz, despesas_saude, despesas_transporte, valor_aluguel_social, cadastrador_id, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_demografico_valores  WHERE projeto_id = ? AND numero_cadastro =?', [id, numero_cadastro], (error, results) => {
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