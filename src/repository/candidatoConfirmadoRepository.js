import con from "./connection.js";

export default async function candidatosConfirmados(confirmado) {

    const comando = `
    INSERT INTO candidato_confirmado (id_formulario, nome, status)
    VALUES (?, ?, ?)
    `;

    let resposta = await con.query(comando, [confirmado.id, confirmado.nome, confirmado.status]);

    let info = resposta[0];

    return info.insertId;
    
}