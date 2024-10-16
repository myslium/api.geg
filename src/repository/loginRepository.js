import con from './connection.js'

export default async function consultarAdmin(usuario, senha) {
    let comando = `
          SELECT DS_USUARIO   usuario,
                 DS_SENHA     senha
            FROM TB_ADMIN
           WHERE DS_USUARIO = ? 
             AND DS_SENHA   = ?;
    `

    let resposta = await con.query(comando, [usuario, senha]);
    let linhas = resposta[0];
    return linhas[0];
}

