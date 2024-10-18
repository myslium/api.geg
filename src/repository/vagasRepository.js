import con from './connection.js'

export async function consultarVagas(vaga) {

    let comando = `INSERT INTO vagas (nome_empresa, contato_empresa, cnpj, cargo, tipo_contrato, localizacao, modelo_trabalho, salario, beneficios, requisicoes, descricao, data_criacao, data_vencimento,
        qtd_vagas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, sysdate(), ? , ?)`;

    let [resultado] = await con.query(comando, [
        vaga.nome_empresa,
        vaga.contato_empresa,
        vaga.cnpj,
        vaga.cargo,
        vaga.tipo_contrato,
        vaga.localizacao,
        vaga.modelo_trabalho,
        vaga.salario,
        vaga.beneficios,
        vaga.requisicoes,
        vaga.descricao,
        vaga.vencimento,
        vaga.quantidade
    ]);

    let into = resultado.insertId;

    return into;
}


export async function atualizarVaga(vaga, id ) {
    let comando = `UPDATE vagas SET 
        nome_empresa = ?, 
        contato_empresa = ?, 
        cnpj = ?, 
        cargo = ?, 
        tipo_contrato = ?, 
        localizacao = ?, 
        modelo_trabalho = ?, 
        salario = ?, 
        beneficios = ?, 
        requisicoes = ?, 
        descricao = ?,
        data_vencimento = ?,
        qtd_vagas = ?
    WHERE id = ?`;

    let [resultado] = await con.query(comando, [
        vaga.nome_empresa,
        vaga.contato_empresa,
        vaga.cnpj,
        vaga.cargo,
        vaga.tipo_contrato,
        vaga.localizacao,
        vaga.modelo_trabalho,
        vaga.salario,
        vaga.beneficios,
        vaga.requisicoes,
        vaga.descricao,
        vaga.vencimento,
        vaga.quantidade,
        id
    ]);

    return resultado.affectedRows; 
}


export async function deletarVaga(id) {
    let comando = `DELETE FROM vagas WHERE id = ?`;

    let resultado = await con.query(comando, [id]);

    let info = resultado[0]

    return info.affectedRows; }




export async function consultarTodasVagas() {
    let comando = `SELECT * FROM vagas`;

    let [resultado] = await con.query(comando);
    
    return resultado; 
}

export async function consultarId(id) {
    const comando = `
        SELECT id, nome_empresa, contato_empresa, cnpj, cargo, tipo_contrato, localizacao, modelo_trabalho, 
               salario, beneficios, requisicoes, descricao, data_vencimento, qtd_vagas 
        FROM vagas
        WHERE id = ?
    `;

    let [resultado] = await con.query(comando, [id]);
    let info = resultado[0];

    return info;
}


export async function consultardesc() {

    const comando = `SELECT  descricao FROM vagas

    `

    let [resultado] = await con.query(comando);
    let info = resultado[0];

    return info
}
