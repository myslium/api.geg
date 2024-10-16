CREATE DATABASE geg;

use geg;

drop database geg;

-- senha
CREATE TABLE TB_ADMIN (
  ID_ADMIN INT PRIMARY KEY auto_increment,
  DS_USUARIO VARCHAR(200),
  DS_SENHA VARCHAR(200)
);

INSERT INTO TB_ADMIN (DS_USUARIO, DS_SENHA) VALUES ('admin', 'senha123');


-- cadastro
CREATE TABLE formularios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    cpf varchar(11) NOT NULL UNIQUE,
    email varchar(200) NOT NULL UNIQUE,
    curriculo blob NOT NULL,
    data_inscricao DATETIME
);

INSERT INTO formularios (cpf, email, curriculo, data_inscricao)
VALUES (?, ?, ?, ?);

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
    data_criacao datetime
);


CREATE TABLE conteudos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    corpo TEXT,
    data_publicacao datetime
);

INSERT INTO conteudos (titulo, corpo, data_publicacao)
VALUES (?, ?, ?);


CREATE TABLE candidato_confirmado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_formulario int,
    nome VARCHAR(100) NOT NULL,
    status VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_formulario) REFERENCES formularios(id)
);

INSERT INTO candidato_confirmado (id_formulario, nome, status)
VALUES (?, ?, ?);


CREATE TABLE candidato (
    id_candidato INT PRIMARY KEY AUTO_INCREMENT,
    id_vaga INT,
    FOREIGN KEY (id_vaga) REFERENCES vagas(id)
);
bancodedadostcc.txt
2 KB
