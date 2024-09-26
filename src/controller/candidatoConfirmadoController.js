import confirmacaoService from "../service/candidatoConfirmado.js";

import { Router } from "express";

const endpoints = Router();

endpoints.post('/confirmarCandidato', async (req, resp) => {
    
    try {
            let confirmado = req.body;
            
            let resposta = await confirmacaoService(confirmado);

            resp.status(200).send({
                novoID: resposta
            })
    } 
    catch (err) {
       
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;