
const db = require('../../db');


module.exports = {
    inserir: (agricultura_residencia, agricultura_residencia_obs, aluguel_social, atividade_economica, atividade_economica_obs, data_criacao, data_alteracao, numero_cadastro, situacao, tipo_moradia, projeto_id, projeto_nome) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_tipo_ocupacao_moradia (agricultura_residencia, agricultura_residencia_obs, aluguel_social, atividade_economica, atividade_economica_obs, data_criacao,data_alteracao, numero_cadastro, situacao, tipo_moradia, projeto_id, projeto_nome) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
                [agricultura_residencia, agricultura_residencia_obs, aluguel_social, atividade_economica, atividade_economica_obs, data_criacao, data_alteracao, numero_cadastro, situacao, tipo_moradia, projeto_id, projeto_nome],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_tipo_ocupacao_moradia  t order by t.cadastro_nome', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, agricultura_residencia, agricultura_residencia_obs, aluguel_social, atividade_economica, atividade_economica_obs, situacao, tipo_moradia, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_tipo_ocupacao_moradia SET agricultura_residencia=?, agricultura_residencia_obs=?, aluguel_social=?, atividade_economica=?, atividade_economica_obs=?, situacao=?, tipo_moradia=?, data_alteracao=? WHERE id = ?',
                [agricultura_residencia, agricultura_residencia_obs, aluguel_social, atividade_economica, atividade_economica_obs, situacao, tipo_moradia, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_tipo_ocupacao_moradia  WHERE projeto_id = ? AND numero_cadastro =?', [id, numero_cadastro], (error, results) => {
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