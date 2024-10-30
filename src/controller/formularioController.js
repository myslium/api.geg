import candidatoFormularioService from "../service/formularioService.js";
import { Router } from "express";
import {
    consultarCandidatos,
    consultarCandidatosPorID,
    atualizarFormulario,
    consultarCandidatoscurriPorID,
    consultarCandidatosPorCPF,
    consultarjoin

} from "../repository/formularioRepository.js";
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
        if (err.message.includes("Candidato já se inscreveu nesta vaga.")) {
            resp.status(409).send({ error: err.message });
        } else {
            logErro(err);
            resp.status(400).send(criarErro(err));
        }
    }
});

endpoints.get('/candidatoNovo', async (req, resp) => {
    try {
        let dado = await consultarCandidatos();
        resp.send(dado);
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/candidato/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let dado = await consultarCandidatosPorID(id);
        resp.send(dado);
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.put('/candidato/:id', async (req, resp) => {
    try {
        let candidato = req.body;
        let id = req.params.id;

        await atualizarFormulario(id, candidato);

        resp.status(200).send();
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/candidatocurr/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let dado = await consultarCandidatoscurriPorID(id);

        console.log("Dados retornados:", dado);

        if (dado && dado.curriculo) {
            const extensao = dado.extensao || 'pdf';

            const buffer = Buffer.from(dado.curriculo, 'base64');

            resp.setHeader('Content-Type', extensao === 'pdf' ? 'application/pdf' :
                extensao === 'doc' ? 'application/msword' :
                extensao === 'docx' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : 'application/octet-stream');

            resp.setHeader('Content-Disposition', `attachment; filename=curriculo.${extensao}`);
            resp.send(buffer);
        } else {
            resp.status(404).send({ error: 'Currículo não encontrado' });
        }
    } catch (err) {
        console.error("Erro ao baixar currículo:", err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.post('/candidatocurrc', async (req, resp) => {
    try {
        const join = req.body ;
        const dado = await consultarjoin(join);

        console.log("Dados retornados:", dado);

        if (dado && dado.curriculo) {
            const extensao = dado.extensao || 'pdf';

            const buffer = Buffer.from(dado.curriculo, 'base64');
            console.log("Tamanho do buffer:", buffer.length);

            resp.setHeader('Content-Type',
                extensao === 'pdf' ? 'application/pdf' :
                extensao === 'doc' ? 'application/msword' :
                extensao === 'docx' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' :
                'application/octet-stream'
            );

            resp.setHeader('Content-Disposition', `attachment; filename=curriculo.${extensao}`);
            resp.send(buffer);
        } else {
            console.error("Currículo não encontrado para o CPF:", join.cpf);
            resp.status(404).send({ error: 'Currículo não encontrado' });
        }
    } catch (err) {
        console.error("Erro ao baixar currículo:", err);
        resp.status(500).send({ error: 'Erro ao processar o pedido' });
    }
});




endpoints.get('/candidatoCPF/:cpf', async (req, resp) => {
    try {
        let cpf = req.params.cpf;
        let dado = await consultarCandidatosPorCPF(cpf);
        resp.send(dado);
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});
export default endpoints;
