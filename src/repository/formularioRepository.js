import con from "./connection.js";

export async function candidatoFormulario(candidato) {
  
    const verificarComando = `
        SELECT COUNT(*) AS count 
        FROM formulario 
        WHERE cpf = ? AND id_vaga = ?
    `;

    let [verificacao] = await con.query(verificarComando, [candidato.cpf, candidato.id_vaga]);

    if (verificacao[0].count > 0) {
        throw new Error("Candidato já se inscreveu nesta vaga.");
    }

    const comando = `
        INSERT INTO formulario (nome, cpf, id_vaga, email, curriculo, data_inscricao, status)
        VALUES (?, ?, ?, ?, ?, NOW(), 'Aguardando')
    `;

    let resposta = await con.query(comando, [
        candidato.nome,
        candidato.cpf,
        candidato.id_vaga,
        candidato.email,
        candidato.curriculo
    ]);

    let info = resposta[0];
    return info.insertId;
}

export async function consultarCandidatos() {
    const comando = `SELECT * FROM formulario`;
    let [resultado] = await con.query(comando);
    return resultado;
}

export async function consultarCandidatosPorID(id) {
    const comando = `
        SELECT * FROM formulario
        WHERE id = ?
    `;
    let [resultado] = await con.query(comando, [id]);
    return resultado[0];
}

export async function atualizarFormulario(id, candidato) {
    const comando = `
        UPDATE formulario
        SET nome = ?, cpf = ?, id_vaga = ?, email = ?, status = ?
        WHERE id = ?
    `;

    let resposta = await con.query(comando, [
        candidato.nome,
        candidato.cpf,
        candidato.id_vaga,
        candidato.email,
        candidato.status,
        id
    ]);

    let info = resposta[0];

    return info.affectedRows;
}

export async function consultarCandidatoscurriPorID(id) {
    const comando = `
        SELECT id, nome, email, curriculo 
        FROM formulario
        WHERE id = ?;
    `;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function consultarCandidatosPorCPF(cpf) {
    const comando = `
        SELECT * FROM formulario
        WHERE cpf = ?
    `;
    let [resultado] = await con.query(comando, [cpf]);
    return resultado[0];
}

export async function consultarjoin(join) {
    const comando = `
    SELECT f.*, v.contato_empresa, v.cargo
    FROM formulario f
    JOIN vagas v ON f.id_vaga = v.id
    WHERE f.cpf = ? AND v.contato_empresa = ? AND v.cargo = ?;
    `;

    let [resultado] = await con.query(comando, [join.cpf, join.contato_empresa, join.cargo]);
    return resultado[0];
}

export async function consultarJoin2(cpf) {
    const comando = `
    SELECT f.*,  v.cargo
    FROM formulario f
    JOIN vagas v ON f.id_vaga = v.id
    WHERE f.cpf = ? ;
    `;

    const [resultado] = await con.query(comando, [cpf]);
    return resultado;  
}
