import { Router } from "express";

import consultarAdminService from "../service/loginService.js";

const endpoints = Router();


endpoints.post('/login/adm', async (req, resp) => {
    try {
        let usuario = req.body.usuario;
        let senha = req.body.senha; 

        let token = await consultarAdminService(usuario, senha);

        resp.send({ token });
    } catch (err) { 
        console.error('Login error:', err); 
        resp.status(401).send({ message: 'Credenciais inválidas.' }); 
    }
});


export default endpoints;