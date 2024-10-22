import con from './connection.js'

export async function consultarVagas(vaga) {

    let comando = `INSERT INTO vagas (nome_empresa, contato_empresa, cnpj, cargo, tipo_contrato, localizacao, modelo_trabalho, salario, beneficios, requisicoes, descricao, data_criacao, data_vencimento,aprovado,
        qtd_vagas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, sysdate(), ? ,não ,?)`;

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
        aprovado = ?,
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
        vaga.aprovado,
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

    let resultado = await con.query(comando);
    
    return resultado[0]; 
}


export async function consultarTodasdesc() {
    let comando = `SELECT * FROM vagas
WHERE descricao IS NOT NULL;`;

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

export async function consultarVagasPorCargo(cargo) {
    const comando = `SELECT * FROM vagas WHERE cargo LIKE ? and aprovado = 'sim'`;
    let [resultado] = await con.query(comando, [`%${cargo}%`]);
    return resultado;
}

export async function consultarVagasPorData(data) {
    const comando = `SELECT * FROM vagas WHERE data_vencimento LIKE ?`;
    let [resultado] = await con.query(comando, [`%${data}%`]);
    return resultado;
}
  
export async function consultarVagasAprovadas() {
    let comando = `SELECT * FROM vagas WHERE aprovado = 'sim'`;

    let [resultado] = await con.query(comando);
    
    return resultado;
}



