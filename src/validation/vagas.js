export default async function consultarVagasvali(vaga) {

    if (!vaga || typeof vaga !== 'object') {
        throw new Error('Vaga inválida. Deve ser um objeto com as informações necessárias.');
    }

    const requiredFields = [
        'nome_empresa', 
        'contato_empresa', 
        'cnpj', 
        'cargo', 
        'tipo_contrato', 
        'localizacao', 
        'modelo_trabalho', 
        'salario', 
        'beneficios', 
        'requisicoes', 
        'descricao'
    ];

  
    for (const field of requiredFields) {
        if (!(field in vaga)) {
            throw new Error(`Campo ${field} é obrigatório.`);
        }
    }

   
    if (typeof vaga.nome_empresa !== 'string' || vaga.nome_empresa.length > 100) {
        throw new Error('Nome da empresa inválido. Deve ser uma string com até 100 caracteres.');
    }

   
    const stringFields = {
        'contato_empresa': 100,
        'cargo': 100,
        'tipo_contrato': 50,
        'localizacao': 100,
        'modelo_trabalho': 50,
    };

    for (const [field, maxLength] of Object.entries(stringFields)) {
        if (typeof vaga[field] !== 'string' || vaga[field].length > maxLength) {
            throw new Error(`${field.replace('_', ' ').charAt(0).toUpperCase() + field.slice(1)} inválido. Deve ser uma string com até ${maxLength} caracteres.`);
        }
    }

    if (typeof vaga.cnpj !== 'string' || !/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(vaga.cnpj)) {
        throw new Error('CNPJ inválido. Formato esperado: XX.XXX.XXX/XXXX-XX');
    }

    if (typeof vaga.salario !== 'number' || vaga.salario <= 0) {
        throw new Error('Salário inválido. Deve ser um número maior que zero.');
    }

    ['beneficios', 'requisicoes', 'descricao'].forEach(field => {
        if (vaga[field] && typeof vaga[field] !== 'string') {
            throw new Error(`${field.charAt(0).toUpperCase() + field.slice(1)} deve ser uma string.`);
        }
    });

    
    return vaga;
}
