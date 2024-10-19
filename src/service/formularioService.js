import {candidatoFormulario} from "../repository/formularioRepository.js";
import validarCandidato from "../validation/candidato.js";


export default async function candidatoFormularioService(candidato) {
    
        validarCandidato(candidato);

        let novoCandidato = await candidatoFormulario(candidato);

        if (!novoCandidato) {
            throw new Error('Erro! Não foi possível inserir');
        }

        return novoCandidato;

}
