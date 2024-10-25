import { Router } from "express";
import {consultarReceitaPorid} from  "../repository/receitaRepository.js";
import { inserirReceita } from "../repository/receitaRepository.js";
  
const endpoints = Router();


endpoints.post("/receita", async (req, resp) => {
    try {
        const receita = req.body;
        const id = await inserirReceita(receita);
        resp.status(200).json({ id });
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});





endpoints.get("/receita/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const dados = await consultarReceitaPorid (id);
        resp.status(200).json({ dados });
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;