import candidatoFormularioService from "../service/formularioService.js";
import { Router } from "express";
import { consultarCandidatos, consultarCandidatosPorID } from "../repository/formularioRepository.js";
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() }); 
const endpoints = Router();


endpoints.post('/candidatoNovo', upload.single('curriculo'), async (req, resp) => {
    try {
        let candidato = req.body;
        candidato.curriculo = req.file.buffer; 

        let resposta = await candidatoFormularioService(candidato);

        resp.status(200).send({
            novoID: resposta
        });
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});


endpoints.get('/candidatoNovo', async (req, resp) => {
    try {
        let dado = await consultarCandidatos();
        resp.status(200).send(dado);
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/candidato/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let dado = await consultarCandidatosPorID(id);
        resp.status(200).send(dado);
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;
