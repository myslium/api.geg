import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const servidor = express();

servidor.use(express.json());
servidor.use(cors())


const PORTA = process.env.PORTA;

servidor.listen(PORTA, () => console.log(`--> API SUBIU NA PORTA ${PORTA}`));