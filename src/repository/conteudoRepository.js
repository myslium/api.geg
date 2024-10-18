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

export async function alterarNota(nota, id) {

    const comando = `
     update conteudos
        set titulo = ?,
            corpo = ?,
            data_publicacao = ?
     where id = ?

    `;

    let resposta = await con.query(comando, [nota.titulo, nota.corpo, nota.data, id]);

    let info = resposta[0];

    return info.affectedRows;
    
}

export async function consultarNota() {
    
    const comando = `
        select*from conteudos
    `
    let resposta = await con.query(comando)
    let info = resposta[0]
    return info
}

export async function consultarNotaPorId() {
    
    const comando = `
        select*from conteudos where id = ?
    `
    let resposta = await con.query(comando, [id])
    let info = resposta[0]
    return info
}


export async function excluirNota(id) {
    
    const comando = `
       DELETE FROM conteudos WHERE id = ?;
    `
    let resposta = await con.query(comando,[id])
    let info = resposta[0]
    return info.affectedRows
}