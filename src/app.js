import 'dotenv/config';
import "./utils/global.js"
import express from 'express';
import cors from 'cors';
import Rotas from './rotas.js';

const servidor = express();

servidor.use(express.json());
servidor.use(cors())

Rotas(servidor);

const PORTA = process.env.PORTA;

servidor.listen(PORTA, () => console.log(`--> API SUBIU NA PORTA ${PORTA}`));