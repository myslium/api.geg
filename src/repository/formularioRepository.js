import con from "./connection.js";


export  async function candidatoFormulario(candidato) {
    const comando = `
        INSERT INTO formularios (cpf, cargo, email, curriculo, data_inscricao)
        VALUES (?, ?, ?, sysdate(), id_vagas)
    `;

    let resposta = await con.query(comando, [candidato.cpf, candidato.cargo, candidato.email, candidato.curriculo]);

    let info = resposta[0];


    return info.insertId;
}

export default async function consultarCandidatos() {
    
    const comando = `
    select*from formularios 
    `
    let [resposta] = await con.query(comando)
    return resposta
}

