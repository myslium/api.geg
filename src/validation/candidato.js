

export default async function validarCandidato(candidato) {
    
    
    if (candidato.cpf > 11 || isNaN(candidato.cpf)) {
        throw new Error('CPF inválido')
    }

    if (!candidato.email) {
        throw new Error('Email inválido')
    }
    
    if (!candidato.curriculo) {
        throw new Error('O currículo é obrigatório!')
    }

    
}