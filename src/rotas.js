import candidatofinalController from  '../src/controller/candidatofinalController.js';
import vagasController from  '../src/controller/vagasController.js'

import emailController from '../src/controller/emailController.js'
import receitaController  from  '../src/controller/receitaController.js'
import loginController from   '../src/controller/loginController.js'
import interesseController from "../src/controller/interesseController.js";
import formularioController from '../src/controller/formularioController.js'
import conteudoController from '../src/controller/conteudoController.js'


export default function Rotas(servidor){


  servidor.use(emailController)
   servidor.use(loginController)

servidor.use( receitaController )
   servidor.use(interesseController)
 
    servidor.use(loginController)
    servidor.use(candidatofinalController);
    servidor.use(vagasController);
    servidor.use(formularioController);
    servidor.use(conteudoController);


}       