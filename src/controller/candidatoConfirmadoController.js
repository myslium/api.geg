import consultarCandidatoConfirmado from "../repository/candidatoConfirmadoRepository.js";
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
       
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.get('/confirmarCandidato/:id', async (req, resp) => {

    try {
        let id = req.params.id 
        let resposta = await consultarCandidatoConfirmado(id)

        resp.status(200).send(resposta)
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})

export default endpoints;