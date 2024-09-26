
export default function validacarConfirmacao(confirmado) {

    if(!confirmado.id || !confirmado.nome || !confirmado.status) {
        throw new Error('Informação obrigatória')
    }
    
}