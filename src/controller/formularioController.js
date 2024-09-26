
import candidatoFormularioService from "../service/formularioService.js";
import { Router } from "express";


const endpoints = Router()

endpoints.post('/candidatoNovo', async (req, resp) => {

    try {
        
        let candidato = req.body;
        
        let resposta = await candidatoFormularioService(candidato)

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