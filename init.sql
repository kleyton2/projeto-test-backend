-- Cria o banco de dados (se não existir)
CREATE DATABASE IF NOT EXISTS produtosdb;

-- Usa o banco de dados
USE produtosdb;

-- Cria a tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
    id CHAR(36) NOT NULL PRIMARY KEY, -- UUID como chave primária
    codigo VARCHAR(255) NOT NULL UNIQUE, -- Código único do produto
    nome VARCHAR(255) NOT NULL, -- Nome do produto
    codigo_barras VARCHAR(255), -- Código de barras (opcional)
    quantidade DECIMAL(10, 2) NOT NULL, -- Quantidade em estoque
    preco DECIMAL(10, 2) NOT NULL, -- Preço do produto
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Data de atualização
);

-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) NOT NULL PRIMARY KEY, -- UUID como chave primária
    email VARCHAR(255) NOT NULL UNIQUE, -- Email do usuário (único)
    password VARCHAR(255) NOT NULL, -- Senha (hash)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Data de atualização
);