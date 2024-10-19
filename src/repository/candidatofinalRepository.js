import con from './connection.js';


export async function inserirCandidatoFinal(vaga, emailEmpresa, descricao) {
    const comando = `INSERT INTO candidato_final (vaga, email_empresa, descricao) VALUES (?, ?, ?)`;
    const [resultado] = await con.query(comando, [vaga, emailEmpresa, descricao]);
    return resultado.insertId;
}


export async function consultarCandidatosFinais() {
    const comando = `SELECT * FROM candidato_final`;
    const [resultado] = await con.query(comando);
    return resultado;
}


export async function atualizarCandidatoFinal(id, final) {
    const comando = `UPDATE candidato_final SET vaga = ?, email_empresa = ?, descricao = ? WHERE id = ?`;
    const [resultado] = await con.query(comando, [final.vaga, final.email_empresa, final.descricao, id]);
    return resultado.affectedRows;
}

export async function consultarmes() {
    const comando = `
      SELECT MONTH(data_inscricao) as mes, COUNT(*) as quantidade 
      FROM candidato_final
      GROUP BY mes
    `;
  
    let [resultado] = await con.query(comando); 
    return resultado; 
}
