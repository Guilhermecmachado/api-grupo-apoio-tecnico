
const db = require('../../db');


module.exports = {
    inserir: (associado_bairro, data_criacao, data_alteracao, entidade_recriativas, entidades_religiosas, especifique, movimento_luta_moradia, outros, partidos_politicos, sindicatos, numero_cadastro, projeto_id, projeto_nome, cadastrador_id) => {
        return new Promise((accept, reject) => {

            db.query('INSERT INTO gta_cadastro_esporte_organizacao_comunitaria (associacao_bairro, data_criacao, data_alteracao, entidade_recreativas, entidade_relegiosa, especifique, movimento_luta_moradia, outros, partidos_politica, sindicatos, numero_cadastro, projeto_id, projeto_nome,cadastros_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [associado_bairro, data_criacao, data_alteracao, entidade_recriativas, entidades_religiosas, especifique, movimento_luta_moradia, outros, partidos_politicos, sindicatos, numero_cadastro, projeto_id, projeto_nome, cadastrador_id],
                (error, results) => {
                    if (error) { reject(error); return; }
                    accept(results.insertId); //insertId
                }
            );
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from gta_cadastro_esporte_organizacao_comunitaria ', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    atualizar: (id, valor_bairro, valor_entidade_recriativa, valor_entidade_religiosa, valor_movimento_luta, valor_outros, valor_partido_politico, valor_sindicato, especifique, cadastrador_id, data_alteracao) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE gta_cadastro_esporte_organizacao_comunitaria SET associacao_bairro=?,  entidade_recreativas=?, entidade_relegiosa=?, movimento_luta_moradia=?, outros=?, partidos_politica=?, sindicatos=?, especifique=?, cadastrador_id=?,data_alteracao=? WHERE id = ?',
                [valor_bairro, valor_entidade_recriativa, valor_entidade_religiosa, valor_movimento_luta, valor_outros, valor_partido_politico, valor_sindicato, especifique, cadastrador_id, data_alteracao, id],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
    buscarUm: (id, numero_cadastro) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM gta_cadastro_esporte_organizacao_comunitaria  WHERE projeto_id = ? AND numero_cadastro=?', [id, numero_cadastro], (error, results) => {
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