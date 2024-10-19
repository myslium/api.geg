import con from "./connection.js";


export async function candidatoFormulario(candidato) {
    const comando = `
        INSERT INTO formularios (cpf, cargo, email, curriculo, data_inscricao)
        VALUES (?, ?, ?, sysdate(), id_vagas)
    `;

    let resposta = await con.query(comando, [candidato.cpf, candidato.cargo, candidato.email, candidato.curriculo]);

    let info = resposta[0];


    return info.insertId;
}

export async function consultarmes() {
    const comando = `
      SELECT MONTH(data_inscricao) as mes, COUNT(*) as quantidade 
      FROM formularios
      GROUP BY mes
    `;
  
    let [resultado] = await con.query(comando); 
    return resultado; 
}

export default async function consultarCandidatos() {
  const comando = `select*from formularios`
  let [resultado] = await con.query(comando)
  return resultado
}
  