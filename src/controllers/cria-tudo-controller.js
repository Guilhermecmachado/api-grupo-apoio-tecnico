const projetoService = require('../services/projetos-service');
const visitaService = require('../services/cadastro-visitas-service');
const controleService = require('../services/cadastro-dados-controle-service')
const responsaveisService = require('../services/cadastro-responsaveis-service')
const familiaService = require('../services/cadastro-demografico-valor-service')
const lazerService = require('../services/cadastro-lazer-service')
const comunitarioService = require('../services/cadastro-esportes-service')
const moradiaService = require('../services/cadastro-ocupacao-service')
const animalService = require('../services/cadastro-animal-service')
const mobilidadeService = require('../services/cadastro-mobilidade-service')
const sustentabilidadeService = require('../services/cadastro-sustentabilidade-service')
const violenciaMariaService = require('../services/cadastro-violencia-maria-service')
const documentoService = require('../services/cadastra-documento-service')
function formatarDataAtual() {
  const objectDate = new Date();

  let day = objectDate.getDate();
  let month = objectDate.getMonth() + 1;
  const year = objectDate.getFullYear();

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  return `${day}/${month}/${year}`;
}

module.exports = {
  createOrUpdate: async (req, res) => {
    let json = { error: '', result: [] };
    let valores = req.body.dados;
    let projeto_id = req.body.projeto_id;
    let numero_cadastro = req.body.numero_cadastro;
    let projeto_nome = req.body.projeto_nome;
    let data_criacao = formatarDataAtual();


    // dados de cada uma das tabelas 
    let dados_controle = valores.dados_controle
    let dados_responsavel1 = valores.dados_responsavel1
    let dados_responsavel2 = valores.dados_responsavel2
    let dados_despesas = valores.dados_despesas
    let dados_lazer = valores.dados_lazer
    let dados_comunitario = valores.dados_comunitario
    let dados_moradia = valores.dados_moradia
    let dados_animais = valores.dados_animais
    let dados_mobilidade = valores.dados_mobilidade
    let dados_sustentabilidade = valores.dados_sustentabilidade
    let dados_maria = valores.dados_maria
    let dados_documento = valores.dados_documento
    // Verifica se valores.dados_controle existe e não é nulo
    if (dados_controle) {

      let existe = controleService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(existe.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    } else if (dados_responsavel1) {
      let existe = responsaveisService.buscarUm(projeto_id, numero_cadastro,'primeiroResponsavel')
      if (existe) {
        data_alteracao = formatarDataAtual()
        responsaveisService.atualizar(
          dados_responsavel1.id,
          dados_responsavel1.cadastro_cohab,
          dados_responsavel1.cpf,
          dados_responsavel1.data_nascimento,
          dados_responsavel1.naturalidade,
          dados_responsavel1.nis,
          dados_responsavel1.nome_completo,
          dados_responsavel1.pais,
          dados_responsavel1.rg,
          dados_responsavel1.rg_data_expedicao,
          dados_responsavel1.rg_uf,
          dados_responsavel1.status_cadastro,
          dados_responsavel1.tipo_cadastro,
          dados_responsavel1.uf,
          dados_responsavel1.contato1,
          dados_responsavel1.contato2,
          dados_responsavel1.tipo_contato1,
          dados_responsavel1.tipo_contato2,
          dados_responsavel1.cpf_cnpj_fonte_pegadora,
          dados_responsavel1.tipo_renda,
          dados_responsavel1.data_admissao,
          dados_responsavel1.valor_renda_bruta,
          dados_responsavel1.valor_renda_liquida,
          dados_responsavel1.mes_referencia_renda,
          dados_responsavel1.data_inicio_renda_declarada,
          dados_responsavel1.valor_renda_declarada_liquida,
          dados_responsavel1.mes_referencia_renda_declarada,
          dados_responsavel1.beneficio_prestacao,
          dados_responsavel1.programa_bolsa_familia,
          dados_responsavel1.menor_18,
          dados_responsavel1.nome_tutor,
          dados_responsavel1.cpf_tutor,
          dados_responsavel1.cadastrador_id,
          dados_responsavel1.status_online,
          data_alteracao
        );
        
        
      } else {
        responsaveisService.inserir(
          dados_responsavel1.cadastro_cohab,
          dados_responsavel1.cpf,
          data_criacao,
          dados_responsavel1.data_alteracao,
          dados_responsavel1.data_nascimento,
          dados_responsavel1.naturalidade,
          dados_responsavel1.nis,
          dados_responsavel1.nome_completo,
          numero_cadastro,
          dados_responsavel1.pais,
          projeto_id,
          projeto_nome,
          dados_responsavel1.rg,
          dados_responsavel1.rg_data_expedicao,
          dados_responsavel1.rg_uf,
          dados_responsavel1.status_cadastro,
          dados_responsavel1.tipo_cadastro,
          dados_responsavel1.uf,
          dados_responsavel1.contato1,
          dados_responsavel1.contato2,
          dados_responsavel1.tipo_contato1,
          dados_responsavel1.tipo_contato2,
          dados_responsavel1.cpf_cnpj_fonte_pegadora,
          dados_responsavel1.tipo_renda,
          dados_responsavel1.data_admissao,
          dados_responsavel1.valor_renda_bruta,
          dados_responsavel1.valor_renda_liquida,
          dados_responsavel1.mes_referencia_renda,
          dados_responsavel1.data_inicio_renda_declarada,
          dados_responsavel1.valor_renda_declarada_liquida,
          dados_responsavel1.mes_referencia_renda_declarada,
          dados_responsavel1.beneficio_prestacao,
          dados_responsavel1.programa_bolsa_familia,
          dados_responsavel1.menor_18,
          dados_responsavel1.nome_tutor,
          dados_responsavel1.cpf_tutor,
          dados_responsavel1.cadastrador_id,
          dados_responsavel1.status_online
        );
        
      }
    } else if (dados_responsavel2) {
      let existe = responsaveisService.buscarUm(projeto_id, numero_cadastro,'segundoResponsavel')
      
      if (existe) {
        data_alteracao = formatarDataAtual()
        responsaveisService.atualizar(
          dados_responsavel2.id,
          dados_responsavel2.cadastro_cohab,
          dados_responsavel2.cpf,
          dados_responsavel2.data_nascimento,
          dados_responsavel2.naturalidade,
          dados_responsavel2.nis,
          dados_responsavel2.nome_completo,
          dados_responsavel2.pais,
          dados_responsavel2.rg,
          dados_responsavel2.rg_data_expedicao,
          dados_responsavel2.rg_uf,
          dados_responsavel2.status_cadastro,
          dados_responsavel2.tipo_cadastro,
          dados_responsavel2.uf,
          dados_responsavel2.contato1,
          dados_responsavel2.contato2,
          dados_responsavel2.tipo_contato1,
          dados_responsavel2.tipo_contato2,
          dados_responsavel2.cpf_cnpj_fonte_pegadora,
          dados_responsavel2.tipo_renda,
          dados_responsavel2.data_admissao,
          dados_responsavel2.valor_renda_bruta,
          dados_responsavel2.valor_renda_liquida,
          dados_responsavel2.mes_referencia_renda,
          dados_responsavel2.data_inicio_renda_declarada,
          dados_responsavel2.valor_renda_declarada_liquida,
          dados_responsavel2.mes_referencia_renda_declarada,
          dados_responsavel2.beneficio_prestacao,
          dados_responsavel2.programa_bolsa_familia,
          dados_responsavel2.menor_18,
          dados_responsavel2.nome_tutor,
          dados_responsavel2.cpf_tutor,
          dados_responsavel2.cadastrador_id,
          dados_responsavel2.status_online,
          data_alteracao
        );
        
      } else {
        responsaveisService.inserir(
          dados_responsavel2.cadastro_cohab,
          dados_responsavel2.cpf,
          data_criacao,
          dados_responsavel2.data_alteracao,
          dados_responsavel2.data_nascimento,
          dados_responsavel2.naturalidade,
          dados_responsavel2.nis,
          dados_responsavel2.nome_completo,
          numero_cadastro,
          dados_responsavel2.pais,
          projeto_id,
          projeto_nome,
          dados_responsavel2.rg,
          dados_responsavel2.rg_data_expedicao,
          dados_responsavel2.rg_uf,
          dados_responsavel2.status_cadastro,
          dados_responsavel2.tipo_cadastro,
          dados_responsavel2.uf,
          dados_responsavel2.contato1,
          dados_responsavel2.contato2,
          dados_responsavel2.tipo_contato1,
          dados_responsavel2.tipo_contato2,
          dados_responsavel2.cpf_cnpj_fonte_pegadora,
          dados_responsavel2.tipo_renda,
          dados_responsavel2.data_admissao,
          dados_responsavel2.valor_renda_bruta,
          dados_responsavel2.valor_renda_liquida,
          dados_responsavel2.mes_referencia_renda,
          dados_responsavel2.data_inicio_renda_declarada,
          dados_responsavel2.valor_renda_declarada_liquida,
          dados_responsavel2.mes_referencia_renda_declarada,
          dados_responsavel2.beneficio_prestacao,
          dados_responsavel2.programa_bolsa_familia,
          dados_responsavel2.menor_18,
          dados_responsavel2.nome_tutor,
          dados_responsavel2.cpf_tutor,
          dados_responsavel2.cadastrador_id,
          dados_responsavel2.status_online
        );
        
      }
    } else if (dados_despesas){
      let existe = familiaService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        familiaService.atualizar(
          id, despesas_agua, despesas_alimentacao, despesas_aluguel, despesas_gas, despesas_luz, despesas_saude, despesas_transporte, valor_aluguel_social, cadastrador_id, status_online, data_alteracao
        );
      } else {
        familiaService.inserir(
          despesas_agua, despesas_alimentacao, despesas_aluguel, numero_cadastro, despesas_gas, projeto_id, projeto_nome, despesas_luz, despesas_saude, despesas_transporte, valor_aluguel_social, data_criacao, status_online, data_alteracao, cadastrador_id
        );
      }
    }else if(dados_lazer){
      let existe = lazerService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(dados_controle.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          dados_controle.data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    }else if(dados_comunitario){
      let existe = comunitarioService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(dados_controle.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          dados_controle.data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    }else if(dados_moradia){
      let existe = moradiaService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(dados_controle.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          dados_controle.data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    }else if(dados_animais){
      let existe = animalService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(dados_controle.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          dados_controle.data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    }else if(dados_mobilidade){
      let existe = mobilidadeService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(dados_controle.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          dados_controle.data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    }else if(dados_sustentabilidade){
      let existe = sustentabilidadeService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(dados_controle.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          dados_controle.data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    }else if(dados_maria){
      let existe = violenciaMariaService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(dados_controle.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          dados_controle.data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    }else if(dados_documento){
      let existe = documentoService.buscarUm(projeto_id, numero_cadastro)
      if (existe) {
        data_alteracao = formatarDataAtual()
        controleService.atualizar(dados_controle.id,
          dados_controle.cep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.data_criacao,
          dados_controle.cadastrador_id,
          dados_controle.status_online,
          dados_controle.data_alteracao)
      } else {
        controleService.inserir(
          dados_controle.dadoscep,
          dados_controle.cidade,
          dados_controle.complemento,
          dados_controle.data_alteracao,
          dados_controle.data_criacao,
          dados_controle.endereco,
          dados_controle.entrevistado,
          dados_controle.numero,
          dados_controle.numero_cadastro,
          dados_controle.observacoes_contato,
          dados_controle.primeiro_responsavel_trabalha,
          dados_controle.projeto_id,
          dados_controle.projeto_nome,
          dados_controle.segundo_responsavel_trabalha,
          dados_controle.uf,
          dados_controle.observacoes,
          dados_controle.data_entrevista,
          dados_controle.status_online,
          dados_controle.cadastrador_id
        );
      }
    }

      res.json(json); // Certifique-se de enviar uma resposta ao final
  }
};

