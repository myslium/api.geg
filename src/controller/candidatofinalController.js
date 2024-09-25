import { Router } from "express";
import { inserirCandidatoFinalService, atualizarCandidatoFinalService} from "../service/candidatofinalService.js";
import { consultarCandidatoFinalPorcpf, consultarCandidatoFinalPoremail } from "../repository/candidatofinalRepository.js";


const endpoints = Router();

endpoints.post("/candidatofinal", async (req, resp) => { 

    try {

        const id = req.body; 
        const id_li = await inserirCandidatoFinalService(id);

        resp.status(200).json({id_li});
    } catch (error) {
      
        resp.status(500).json({ mensagem: error.message });
      }
})

endpoints.post("/candidatofinal/:cpf", async (req, resp) => { 

    try {

        const cpf = req.params.cpf; 
        const dados = await consultarCandidatoFinalPorcpf(cpf);

        resp.status(200).json({dados});
    } catch (error) {
      
        resp.status(500).json({ mensagem: error.message });
      }
})

endpoints.post("/candidatofinal/:email", async (req, resp) => { 

    try {

        const email = req.params.email; 
        const dados = await consultarCandidatoFinalPoremail(email);

        resp.status(200).json({dados});
    } catch (error) {
      
        resp.status(500).json({ mensagem: error.message });
      }
})

endpoints.put("/candidatofinal/put/:id", async (req, resp) => { 

    try {
        const id = req.params.id;
        const final = req.body; 
         await  atualizarCandidatoFinalService(id, final);


        resp.status(200).json();
    } catch (error) {
      
        resp.status(500).json({ mensagem: error.message });
      }
})


export default endpoints;