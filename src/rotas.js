import candidatofinalController from  '../src/controller/candidatofinalController.js';
import vagasController from  '../src/controller/vagasController.js'
<<<<<<< HEAD

import emailController from '../src/controller/emailController.js'
import loginController from  '../src/controller/loginController.js'
=======
import receitaController  from  '../src/controller/receitaController.js'
import loginController from   '../src/controller/loginController.js'
import interesseController from "../src/controller/interesseController.js";
>>>>>>> 43a2d09d906c319860080c1fd75e0ec370113db1
import formularioController from '../src/controller/formularioController.js'
import conteudoController from '../src/controller/conteudoController.js'


export default function Rotas(servidor){

<<<<<<< HEAD
  servidor.use(emailController)
   servidor.use(loginController)
=======

servidor.use( receitaController )
   servidor.use(interesseController)
 
>>>>>>> 43a2d09d906c319860080c1fd75e0ec370113db1
    servidor.use(loginController)
    servidor.use(candidatofinalController);
    servidor.use(vagasController);
    servidor.use(formularioController);
    servidor.use(conteudoController);


}       