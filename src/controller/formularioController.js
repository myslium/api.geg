
import candidatoFormularioService from "../service/formularioService.js";
import { Router } from "express";
import {consultarCandidatos, consultarCandidatosPorID,  consultarmes } from "../repository/formularioRepository.js";


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
        
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})

endpoints.get('/candidatoNovo', async (req, resp) => {
    try {
        let dado = await consultarCandidatos()

        resp.status(200).send(dado)
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})

endpoints.get('/candidato/:id', async (req, resp) => {

    try {
        let id = req.params.id
        let dado = await consultarCandidatosPorID(id)

        resp.status(200).send(dado)

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})


endpoints.get('/formulario/s', async (req, resp) => {
    try {
      
       let dados = await consultarmes();

        resp.status(200).send(dados);
    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
});

export default endpoints;