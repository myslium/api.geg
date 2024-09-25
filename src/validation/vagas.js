

export default async function consultarVagasvali(vaga) {

    if (!vaga.nome_empresa || typeof vaga.nome_empresa !== 'string' || vaga.nome_empresa.length > 100) {
        throw new Error('Nome da empresa inválido.');
    }
    if (!vaga.contato_empresa || typeof vaga.contato_empresa !== 'string' || vaga.contato_empresa.length > 100) {
        throw new Error('Contato da empresa inválido.');
    }
    if (!vaga.cnpj || typeof vaga.cnpj !== 'string' || !/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(vaga.cnpj)) {
        throw new Error('CNPJ inválido. Formato esperado: XX.XXX.XXX/XXXX-XX');
    }
    if (!vaga.cargo || typeof vaga.cargo !== 'string' || vaga.cargo.length > 100) {
        throw new Error('Cargo inválido.');
    }
    if (!vaga.tipo_contrato || typeof vaga.tipo_contrato !== 'string' || vaga.tipo_contrato.length > 50) {
        throw new Error('Tipo de contrato inválido.');
    }
    if (!vaga.localizacao || typeof vaga.localizacao !== 'string' || vaga.localizacao.length > 100) {
        throw new Error('Localização inválida.');
    }
    if (!vaga.modelo_trabalho || typeof vaga.modelo_trabalho !== 'string' || vaga.modelo_trabalho.length > 50) {
        throw new Error('Modelo de trabalho inválido.');
    }
    if (typeof vaga.salario !== 'number' || vaga.salario <= 0) {
        throw new Error('Salário inválido.');
    }
   
    if (vaga.beneficios && typeof vaga.beneficios !== 'string') {
        throw new Error('Benefícios devem ser uma string.');
    }
    if (vaga.requisicoes && typeof vaga.requisicoes !== 'string') {
        throw new Error('Requisições devem ser uma string.');
    }
    if (vaga.descricao && typeof vaga.descricao !== 'string') {
        throw new Error('Descrição deve ser uma string.');
    }}