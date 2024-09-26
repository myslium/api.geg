import { inserirNota } from "../repository/conteudoRepository.js";
import { Router } from "express";

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
        resp.status(400).send({
            erro: err.message
        })
    }
    
})

export default endpoints;