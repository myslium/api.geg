import { Router } from "express";
import { inserirInteresse } from "../repository/interesseRepository.js";
  
const endpoints = Router();


endpoints.post("/interesse", async (req, resp) => {
    try {
        const empresa  = req.body;

        const id = await inserirInteresse(empresa);
        
        resp.status(200).json({ id:id });
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});



export default endpoints;
