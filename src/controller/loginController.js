import { Router } from "express";

import consultarAdminService from "../service/loginService.js";

const endpoints = Router();


endpoints.post('/login/adm', async (req,resp) => {
    try {
        let usuario = req.query.usuario;
        let senha = req.query.senha;

        let token = await consultarAdminService(usuario, senha);

        resp.send({token});
    }
    catch (err) { 
        logErro(err);
        resp.status(401).send(criarErro(err));
    }
})



export default endpoints;