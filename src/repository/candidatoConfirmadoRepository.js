import con from "./connection.js";

export async function candidatosConfirmados(confirmado) {

    const comando = `
    INSERT INTO candidato_confirmado (id_formulario, nome, status)
    VALUES (?, ?, ?)
    `;

    let resposta = await con.query(comando, [confirmado.id, confirmado.nome, confirmado.status]);

    let info = resposta[0];

    return info.insertId;
    
}

export default async function consultarCandidatoConfirmado(id) {

    const comando = `
    SELECT 
        f.id,
        f.cpf,
        f.email
    FROM candidato_confirmado c
    JOIN formularios f ON f.id = c.id_formulario
    WHERE f.id = ?

    `
    let [resultado] = await con.query(comando, [id])
    let info = resultado
    return info
    
}