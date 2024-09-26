import candidatofinalController from  '../src/controller/candidatofinalController.js';
import vagasController from  '../src/controller/vagasController.js'
import loginController from  '../src/controller/loginController.js'
import formularioController from '../src/controller/formularioController.js'
import conteudoController from '../src/controller/conteudoController.js'
import candidatoConfirmadoController from '../src/controller/candidatoConfirmadoController.js'

export default function Rotas(servidor){

    servidor.use(loginController)
    servidor.use(candidatofinalController);
    servidor.use(vagasController);
    servidor.use(formularioController);
    servidor.use(conteudoController);
    servidor.use(candidatoConfirmadoController);

}       