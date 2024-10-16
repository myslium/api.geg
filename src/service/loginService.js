import consultarAdmin from "../repository/loginRepository.js"
import { gerarTokenAdmin } from "../utils/jwt.js";


export default async function consultarAdminService(usuario, senha) {
    let loginInfo = await consultarAdmin(usuario, senha);
    
    if (!loginInfo){
        throw Error('Credenciais inválidas.');

    }
        
    let token = gerarTokenAdmin(loginInfo);
    return token;
}