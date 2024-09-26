import validacarConfirmacao from "../validation/confirmacao.js";
import candidatosConfirmados from "../repository/candidatoConfirmadoRepository.js";

export default function confirmacaoService(confirmado) {

    validacarConfirmacao(confirmado)

    let resposta = candidatosConfirmados(confirmado)

    if (resposta.length === 0) {
        throw new Error('Não foi possível inserir')
    }

    return resposta;


}