import { consultarVagaservice, atualizarVagaservice, deletarVagaservice } from "../service/vagasService.js";
import consultarTodasVagas from "../repository/vagasRepository.js";

import { Router } from "express";


const endpoints = Router();



endpoints.post('/vagas', async (req, resp) => {
    try {
        let dados = req.body;
        let id = await consultarVagaservice(dados);

        resp.status(200).json({id: id});


    } catch (error) {
        resp.status(500).json({ mensagem: error.message });
    }
});

endpoints.get('/vagas', async (req, resp) => {
    try {
      
       let dados = await consultarTodasVagas();

        resp.status(200).json({dados});

    } catch (error) {
        resp.status(500).json({ mensagem: error.message });
    }
});
   

endpoints.put('/vagas/:id', async (req, resp) => {
    try {
      const dados = req.body;
      const id = req.params.id;
  
 
      const linhasAfetadas = await atualizarVagaservice(dados, id);

      resp.status(200).json({ linhasAfetadas });
  
    } catch (error) {
      
      resp.status(500).json({ mensagem: error.message });
    }
  });


endpoints.delete('/vagas/del/:id', async (req, resp) => {
    try {
  
        let id = req.params.id;

         await deleteVaga(id);

        resp.status(200).json();


    } catch (error) {
        resp.status(500).json({ mensagem: error.message });
    }
});

