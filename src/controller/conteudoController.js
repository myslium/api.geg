import { inserirNota } from "../repository/conteudoRepository.js";
import { Router } from "express";
import { logErro } from "../utils/log.js";

const endpoints = Router();

endpoints.post('/inserirNota', async (req, resp) => {

    try {
         let nota = req.body;

         let resposta = await inserirNota(nota);


         resp.status(200).send({
            novoID: resposta
         })
    } 
    
    catch (err) {
        logErro
        resp.status(400).send(criarErro(err))
    }
    
})

export default endpoints;