import  {candidatosConfirmados} from "../repository/candidatoConfirmadoRepository.js";
import consultarCandidatoPorCpf from "../repository/candidatoConfirmadoRepository.js";
import confirmacaoService from "../service/candidatoConfirmado.js";


import { Router } from "express";

const endpoints = Router();

endpoints.post('/confirmarCandidato', async (req, resp) => {
    
    try {
            let confirmado = req.body;
            
            let resposta = await candidatosConfirmados(confirmado);

            resp.status(200).send({
                novoID: resposta
            })
    } 
    catch (err) {
       
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})



endpoints.get('/conferirCandidato/:cpf', async (req, resp) => {

    try {
        let cpf = req.params.cpf

        let resposta = await consultarCandidatoPorCpf(cpf)

        resp.status(200).send(resposta)
        
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})



export default endpoints;