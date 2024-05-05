
const db = require('../../db');


module.exports = {
    inserir: (cadastro_cohab, cpf, data_criacao, data_alteracao, data_nascimento, naturalidade, nis, nome_completo, numero_cadastro, pais, projeto_id, projeto_nome, rg, rg_data_expedicao, rg_uf, status_cadastro, tipo_cadastro, uf) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_responsaveis (cadastro_cohab, cpf, data_criacao, data_alteracao, data_nascimento, naturalidade, nis, nome_completo, numero_cadastro, pais, projeto_id, projeto_nome, rg, rg_data_expedicao, rg_uf, status_cadastro, tipo_cadastro, uf) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [cadastro_cohab, cpf, data_criacao, data_alteracao, data_nascimento, naturalidade, nis, nome_completo, numero_cadastro, pais, projeto_id, projeto_nome, rg, rg_data_expedicao, rg_uf, status_cadastro, tipo_cadastro, uf],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_responsaveis  t order by t.cadastro_nome', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, cadastro_cohab, cpf, data_nascimento, naturalidade, nis, nome_completo, pais, rg, rg_data_expedicao, rg_uf, status_cadastro, tipo_cadastro, uf, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_responsaveis SET cadastro_cohab=?, cpf=?, data_nascimento=?, naturalidade=?, nis=?, nome_completo=?, pais=?, rg=?, rg_data_expedicao=?, rg_uf=?, status_cadastro=?, tipo_cadastro=?, uf=?, data_alteracao=? WHERE id = ?',
                [cadastro_cohab, cpf, data_nascimento, naturalidade, nis, nome_completo, pais, rg, rg_data_expedicao, rg_uf, status_cadastro, tipo_cadastro, uf, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro, tipo_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_responsaveis WHERE projeto_id = ? AND numero_cadastro = ? AND tipo_cadastro  = ?', [id, numero_cadastro, tipo_cadastro], (error, results) => {
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