import { inserirNota, consultarNota, alterarNota, excluirNota, consultarNotaPorId } from "../repository/conteudoRepository.js";
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
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})

endpoints.put('/inserirNota/:id', async (req, resp) => {

    try {
         let id = req.params.id
         let nota = req.body

         let resposta = await alterarNota(nota, id);


         resp.status(200).send()
    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})



endpoints.delete('/inserirNota/:id', async (req, resp) => {
    
    try {
        let id = req.params.id

        let resposta = await excluirNota(id)

        resp.status(200).send()

    } catch (err) {
         logErro(err)
        resp.status(400).send(criarErro(err))
    }
    }
)


endpoints.get('/inserirNota', async (req, resp) => {
    try {
        let nota = await consultarNota()

        resp.status(200).send(nota)

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})

endpoints.get('/inserirNota/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let nota = await consultarNotaPorId(id)

        resp.status(200).send(nota)

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})

export default endpoints;