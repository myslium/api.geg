import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Rotas from './rotas.js';

const servidor = express();

servidor.use(express.json());
servidor.use(cors())

Rotas(service);

const PORTA = process.env.PORTA;

servidor.listen(PORTA, () => console.log(`--> API SUBIU NA PORTA ${PORTA}`));