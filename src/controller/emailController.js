import { Router } from "express";
import mailer from 'nodemailer'
import { consultarCandidatosPorCPF } from '../repository/formularioRepository.js'



const endpoints = Router();


endpoints.post('/mandaremail', async (req, resp) => {

    try {

        let dado = await consultarCandidatosPorCPF(req.body.cpf);
        const buffer = Buffer.from(dado.curriculo, 'base64');


        let transporter = mailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'geg.servicosrecursoshumanos@gmail.com',
                pass: 'e t s gr x v o o h c z r x i m'
            }
        });



        const mailOptions = {
            from: 'G&G <geg.servicosrecursoshumanos@gmail.com>',
            to: req.body.emailEmpresa,
            subject: 'Bem-Vindo | Cadastro 2',
            html: `
                <h1 style="Purple Heart:;font-size:20px"> Bem vindo a G&G </h1>
                <h2>${req.body.vaga}</h2>
                <p>${req.body.descricao}</p>
            `,
            attachments: [{
                filename: 'curriculo.pdf',
                content: buffer
            }]
        }

        
        transporter.sendMail(mailOptions);
        resp.send();

    }
    catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }

})




export default endpoints;