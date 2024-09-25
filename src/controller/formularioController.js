import candidatoFormulario from "../repository/formularioRepository.js";
import { Router } from "express";

import { logErro } from "../utils/log.js";
import { error } from "console";

const endpoints = Router()

endpoints.post('/candidato', async (req, resp) => {

    try {
        
        let candidato = req.body;
        
        let resposta = await candidatoFormulario(candidato)

        resp.status(400).send({
            novoID: resposta
        })
    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})