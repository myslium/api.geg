import con from "./connection.js";


export async function inserirNota(nota) {

    const comando = `
    INSERT INTO conteudos (titulo, corpo, data_publicacao)
    VALUES (?, ?, ?)
    `;

    let resposta = await con.query(comando, [nota.titulo, nota.corpo, nota.data]);

    let info = resposta[0];

    return info.insertId;
    
}