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
                pass: 'iklp fxeu rqqq ja77 ozbt iw4b ga7c vc3i'
            }
        });



        const mailOptions = {
            from: 'G&G <ra52547559897@acaonsfatima.org.br>',
            to: req.body.to,
            subject: 'Bem-Vindo | Cadastro 2',
            html: `
                <h1 style="Purple Heart:;font-size:20px"> Bem vindo a G&G </h1>
                <p>OIe Mariaaanaaa</p>
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