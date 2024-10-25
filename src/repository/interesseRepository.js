import con from './connection.js'

export async function inserirInteresse(interesse) {
    const comando = `
        INSERT INTO interesse (empresa, cnpj)
        VALUES (?, ?)
    `;

    let resposta = await con.query(comando, [interesse.empresa, interesse.cnpj]);

    let info = resposta[0];
    return info.insertId;
}
