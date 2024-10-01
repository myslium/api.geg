import { Router } from "express";
import { inserirCandidatoFinalService, atualizarCandidatoFinalService} from "../service/candidatofinalService.js";
import { consultarCandidatosFinais} from "../repository/candidatofinalRepository.js";
import { autenticacaoAdmin } from "../utils/jwt.js";


const endpoints = Router();

endpoints.post("/candidatofinal", async (req, resp) => { 

    try {

        const id = req.body; 
        const id_li = await inserirCandidatoFinalService(id);

        resp.status(200).json({id_li});
    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.get("/candidatofinal", async (req, resp) => { 

    try {

 
        const dados = await consultarCandidatosFinais();

        resp.status(200).json({dados});
    } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})


endpoints.put("/candidatofinal/put/:id", autenticacaoAdmin, async (req, resp) => { 

    try {
        const id = req.params.id;
        const final = req.body; 
         await  atualizarCandidatoFinalService(id, final);


        resp.status(200).json();
       } 
    
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})


export default endpoints;