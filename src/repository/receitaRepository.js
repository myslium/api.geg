import con from './connection.js'

export async function inserirReceita(receita) {
    const comando = `
        INSERT INTO receita (vaga, salario, qtd_vagas, id_interesse)
        VALUES (?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [
        receita.vaga,
        receita.salario,
        receita.qtd_vagas,
        receita.id_interesse
    ]);

    let info = resposta[0];
    return info.insertId;
}

export async function consultarReceitaPorid(id) {
    const comando = `
        SELECT 
            r.*, 
            i.empresa 
        FROM 
            receita r
        JOIN 
            interesse i ON r.id_interesse = i.id
        WHERE 
            r.id_interesse = ?
    `;

    let resultado = await con.query(comando, [id]);
    return resultado[0];
}

