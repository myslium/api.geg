import { consultarVagaservice, atualizarVagaservice, deletarVagaservice} from "../service/vagasService.js";
import {consultarTodasVagas, consultarId,  consultarTodasdesc,consultarVagasPorCargo } from "../repository/vagasRepository.js";
import { Router } from "express";


const endpoints = Router();



endpoints.post('/vagas', async (req, resp) => {
    try {
        let dados = req.body;
        let id = await consultarVagaservice(dados);

        resp.status(200).send({id: id});


    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
});

endpoints.get('/vagas', async (req, resp) => {
    try {
      
       let dados = await consultarTodasVagas();

        resp.status(200).send(dados);
    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
});
endpoints.get('/vagasd', async (req, resp) => {
    try {
      
       let dados = await  consultarTodasdesc();

        resp.status(200).send(dados);
    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
});




endpoints.get('/vagas/:id', async (req, resp) => {

    try {
        let id = req.params.id

        let resposta = await consultarId(id)

        resp.status(200).send(resposta)
        
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
    
})
   

endpoints.put('/vagas/:id', async (req, resp) => {
    try {
      const dados = req.body;
      const id = req.params.id;
  
 
      await atualizarVagaservice(dados, id);

      resp.status(200).send();
    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
  });

  endpoints.get('/vagas/cargo/:cargo', async (req, resp) => {
    try {
        const cargo = req.params.cargo;
        let  vagas = await consultarVagasPorCargo(cargo);
     
        resp.status(200).send(vagas);
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});


endpoints.delete('/vagas/del/:id',  async (req, resp) => {
    try {
  
        let id = req.params.id;

        await deletarVagaservice(id);

        resp.status(200).send();


    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
});



export default endpoints;
