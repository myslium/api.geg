import candidatoFormulario from "../repository/formularioRepository.js";
import validarCandidato from "../validation/candidato.js";


export default async function candidatoFormularioService(candidato) {

    let verificacao = validarCandidato(candidato);

    let novoCandidato = candidatoFormulario(verificacao)

    return novoCandidato
}