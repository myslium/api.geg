import { consultarVagas, deletarVaga, atualizarVaga } from "../repository/vagasRepository.js";
import consultarVagasvali from "../validation/vagas.js";

export async function consultarVagaservice(vaga) {
    
    const vagaValida = await consultarVagasvali(vaga);

    
    const resultado = await consultarVagas(vagaValida);

   
    if (resultado === 0) {
        throw new Error('Erro ao inserir a vaga');
    }

    return resultado; 
}

export async function atualizarVagaservice(id, vaga) {

    const resultado = await atualizarVaga(id, vaga);

    
    if (resultado === 0) {
        throw new Error('Erro ao atualizar a vaga');
    }

    return resultado; 
}

export async function deletarVagaservice(id) {

    const resultado = await deletarVaga(id);

    
    if (resultado === 0) {
        throw new Error('Erro ao deletar a vaga');
    }

    return resultado; 
}
