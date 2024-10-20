import { inserirCandidatoFinal, atualizarCandidatoFinal } from "../repository/candidatofinalRepository.js";

export async function inserirCandidatoFinalService(vaga, emailEmpresa, descricao) {
    const resultado = await inserirCandidatoFinal(vaga, emailEmpresa, descricao);

    if (resultado === 0) {
        throw new Error('Erro ao inserir candidato final');
    }

    return resultado; 
}

export async function atualizarCandidatoFinalService(id, final) {
    const resultado = await atualizarCandidatoFinal(id, final);

    if (resultado === 0) {
        throw new Error('Erro ao atualizar candidato final');
    }

    return resultado; 
}
