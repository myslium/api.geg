import con from "./connection.js";

export async function candidatoFormulario(candidato) {
    const comando = `
        INSERT INTO formularios (nome, cpf, id_vaga, email, curriculo, data_inscricao, status)
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
    const comando = `SELECT * FROM formularios`;
    let [resultado] = await con.query(comando);
    return resultado;
}

export async function consultarCandidatosPorID(id) {
    const comando = `
        SELECT * FROM formularios
        WHERE id = ?
    `;
    let [resultado] = await con.query(comando, [id]);
    return resultado[0];
}


export async function atualizarFormulario(id, candidato) {
    const comando = `
        UPDATE formularios
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
        FROM formularios 
        WHERE id = ?;
    `;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}


export async function consultarCandidatosPorCPF(cpf) {
    const comando = `
        SELECT * FROM formularios
        WHERE cpf = ?
    `;
    let [resultado] = await con.query(comando, [cpf]);
    return resultado[0];
}