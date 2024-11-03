import CryptoJS from 'crypto-js';
import con from './connection.js';


export default async function consultarAdmin(usuario, senha) {
  
    const senhaCriptografada = CryptoJS.SHA256(senha).toString(); 

    let comando = `
          SELECT DS_USUARIO usuario,
                 DS_SENHA   senha
            FROM TB_ADMIN
           WHERE DS_USUARIO = ? 
             AND DS_SENHA   = ?;
    `;

    let resposta = await con.query(comando, [usuario, senhaCriptografada]); 
    let linhas = resposta[0];

    return linhas[0]; 
}
