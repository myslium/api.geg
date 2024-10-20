import con from "./connection.js";

export async function candidatoFormulario(candidato) {
    const comando = `
        INSERT INTO formularios (nome, cpf, id_vaga, email, curriculo, data_inscricao)
        VALUES (?, ?, ?, ?, ?, NOW())
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
