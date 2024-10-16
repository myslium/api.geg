import { Router } from "express";
import consultarAdmin from "../repository/loginRepository.js";
import { gerarTokenAdmin } from "../utils/jwt.js";
const endpoints = Router();

endpoints.post('/login/adm', async (req, resp) => {
    try {
        const { usuario, senha } = req.body; 

        const usuarioValido = await consultarAdmin(usuario, senha); 

        if (!usuarioValido) {
            return resp.status(400).send({ erro: "Usuário ou senha incorreto(s)" });
        }

        const token = gerarTokenAdmin(usuarioValido); 
        resp.send({ token });
        
    } catch (err) { 
        console.error('Erro no login:', err); 
        resp.status(500).send({ message: 'Erro ao processar a solicitação.' }); 
    }
});

export default endpoints;
