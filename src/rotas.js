import candidatofinalController from  '../src/controller/candidatofinalController';
import vagasController from  '../src/controller/vagasController.js'
import loginController from  '../src/controller/loginController.js'

export default function Rotas(servidor){

   servidor.use(loginController)
    servidor.use(candidatofinalController);
    servidor.use(vagasController);

}       