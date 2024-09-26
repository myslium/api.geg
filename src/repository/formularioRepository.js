import con from "./connection.js";


export default async function candidatoFormulario(candidato) {
    const comando = `
        INSERT INTO formularios (cpf, email, curriculo, data_inscricao)
        VALUES (?, ?, ?, sysdate())
    `;

    let resposta = await con.query(comando, [candidato.cpf, candidato.email, candidato.curriculo]);

    let info = resposta[0];


    return info.insertId;
}
