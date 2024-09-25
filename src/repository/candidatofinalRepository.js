import con from './connection.js';


export async function inserirCandidatoFinal(id) {
    const comando = `INSERT INTO candidato_final (id_vaga, id_candidato) VALUES (?, ?)`;
    const [resultado] = await con.query(comando, [id.vaga, id.candidato]);
    return resultado.insertId;
}



export async function consultarCandidatosFinais() {
    const comando = `SELECT * FROM candidato_final`;
    const [resultado] = await con.query(comando);
    return resultado;
}


export async function consultarCandidatoFinalPorcpf(cpf) {
    const comando = `SELECT * FROM candidato_final WHERE cpf = ?`;
    const [resultado] = await con.query(comando, [cpf]);
    return resultado[0];
}

export async function consultarCandidatoFinalPoremail(email) {
    const comando = `SELECT * FROM candidato_final WHERE email = ?`;
    const [resultado] = await con.query(comando, [email]);
    return resultado[0];
}


export async function atualizarCandidatoFinal(id, final) {
    const comando = `UPDATE candidato_final SET id_vaga = ?, id_candidato = ? WHERE id = ?`;
    const [resultado] = await con.query(comando, [final.vaga, final.candidato, id]);
    return resultado.affectedRows;
}