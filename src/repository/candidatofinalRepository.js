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




export async function atualizarCandidatoFinal(id, final) {
    const comando = `UPDATE candidato_final SET id_vaga = ?, id_candidato = ? WHERE id = ?`;
    const [resultado] = await con.query(comando, [final.vaga, final.candidato, id]);
    return resultado.affectedRows;
}