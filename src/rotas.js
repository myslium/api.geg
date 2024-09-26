import formularioController from './controller/formularioController.js';
import conteudoController from './controller/conteudoController.js';

export default function rotas(servidor) {
    servidor.use(formularioController)
    servidor.use(conteudoController)
}