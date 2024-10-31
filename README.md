# Criando o Banco de Dados
CREATE DATABASE geg;

USE geg;

# Tabela de Administradores
CREATE TABLE TB_ADMIN (
    ID_ADMIN INT PRIMARY KEY AUTO_INCREMENT,
    DS_USUARIO VARCHAR(200),
    DS_SENHA VARCHAR(200)
);

# Tabela de Vagas
CREATE TABLE vagas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_empresa VARCHAR(100) NOT NULL,
    contato_empresa VARCHAR(100) NOT NULL,
    cnpj VARCHAR(20) NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    tipo_contrato VARCHAR(50) NOT NULL,
    localizacao VARCHAR(100) NOT NULL,
    modelo_trabalho VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    beneficios TEXT,
    requisicoes TEXT,
    descricao TEXT,
    data_criacao DATETIME,
    data_vencimento DATETIME,
    aprovado ENUM('sim', 'não'),
    qtd_vagas INT
);
# Tabela de Formulários
CREATE TABLE formularios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL ,
    id_vaga INT,
    email VARCHAR(200) NOT NULL ,
    curriculo LONGBLOB NOT NULL,
    data_inscricao DATETIME,
    status VARCHAR(100) NULL,
    FOREIGN KEY (id_vaga) REFERENCES vagas(id)
);

# Tabela de Conteúdos
CREATE TABLE conteudos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    corpo TEXT,
    data_publicacao DATETIME
);

# Tabela de Candidato Final
CREATE TABLE candidato_final (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vaga VARCHAR(100) NOT NULL,
    email_empresa VARCHAR(200) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    data_postagem DATETIME DEFAULT CURRENT_TIMESTAMP
);

# Tabela interesse nos nossos serviços

CREATE TABLE interesse 
(id INT PRIMARY KEY AUTO_INCREMENT,
empresa VARCHAR(100) NOT NULL,
cnpj VARCHAR(18) NOT NULL);

# Tabela de recibo

CREATE TABLE receita (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vaga VARCHAR(100) NOT NULL, 
    salario DECIMAL(10, 2) NOT NULL, 
    qtd_vagas INT NOT NULL, 
    id_interesse INT,
    FOREIGN KEY (id_interesse) REFERENCES interesse(id)
);

