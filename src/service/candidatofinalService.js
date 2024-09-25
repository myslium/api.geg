import { inserirCandidatoFinal, atualizarCandidatoFinal } from "../repository/candidatofinalRepository.js";

export async function inserirCandidatoFinalService (id) {
    

    
    const resultado = await inserirCandidatoFinal (id);

   
    if (resultado === 0) {
        throw new Error('Erro ao inserir ids');
    }

    return resultado; 
}

export async function atualizarCandidatoFinalService (id, final) {

    const resultado = await atualizarCandidatoFinal(id, final);

    
    if (resultado === 0) {
        throw new Error('Erro ao atualizar a candidato final');
    }

    return resultado; 
}
