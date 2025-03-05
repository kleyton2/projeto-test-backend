## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

📋 Descrição do Projeto
Este projeto é uma API RESTful desenvolvida em NestJS para gerenciamento de produtos e autenticação de usuários. Ele utiliza TypeORM para a persistência de dados em um banco de dados MySQL/MariaDB e Passport para autenticação via JWT (JSON Web Token).

🚀 Instalação e Execução
Pré-requisitos
Node.js (v18 ou superior)

MySQL/MariaDB (ou outro banco de dados suportado pelo TypeORM)

NPM ou Yarn (gerenciadores de pacotes)

Passos para Instalação
Clone o repositório:

git clone https://github.com/kleyton2/projeto-test-backend
cd projeto-test-backend

Instale as dependências:

npm install

🛠 Decisões Técnicas
1. NestJS
Escolhido por sua arquitetura modular e escalabilidade.

Facilita a criação de APIs RESTful com suporte a injeção de dependências.

2. TypeORM
Utilizado para a persistência de dados, permitindo a definição de entidades e relacionamentos de forma simples.

1. MySQL/MariaDB
Escolhido como banco de dados principal por sua confiabilidade e suporte a transações.

A tabela produtos armazena informações sobre os produtos, enquanto a tabela users gerencia os usuários do sistema.

4. Autenticação com JWT
Implementada usando Passport e JWT para garantir segurança nas rotas protegidas.

O token JWT é gerado durante o login e deve ser enviado no cabeçalho das requisições para acessar rotas protegidas.

5. Validação de Dados
Utilização de class-validator e class-transformer para validação de DTOs.

Validações personalizadas para garantir a integridade dos dados (por exemplo, email válido, senha forte).

6. Documentação com Swagger
A API é documentada automaticamente usando o Swagger


📡 Exemplos de Requisições e Respostas
1. Autenticação
Login
Requisição:

http

POST /auth/login
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "senha123"
}
Resposta:

json

{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
2. Produtos
Listar Todos os Produtos
Requisição:

http

GET /produtos
Authorization: Bearer <token>
Resposta:

json

[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "codigo": "P001",
    "nome": "Produto 1",
    "codigo_barras": "7891234567890",
    "quantidade": 100.00,
    "preco": 19.99,
    "created_at": "2023-10-01T12:00:00.000Z",
    "updated_at": "2023-10-01T12:00:00.000Z"
  }
]
Criar um Produto
Requisição:

http

POST /produtos
Authorization: Bearer <token>
Content-Type: application/json

{
  "codigo": "P002",
  "nome": "Produto 2",
  "codigo_barras": "7891234567891",
  "quantidade": 50.00,
  "preco": 29.99
}
Resposta:

json

{
  "id": "123e4567-e89b-12d3-a456-426614174001",
  "codigo": "P002",
  "nome": "Produto 2",
  "codigo_barras": "7891234567891",
  "quantidade": 50.00,
  "preco": 29.99,
  "created_at": "2023-10-01T12:00:00.000Z",
  "updated_at": "2023-10-01T12:00:00.000Z"
}
Atualizar um Produto
Requisição:

http

PUT /produtos/P002
Authorization: Bearer <token>
Content-Type: application/json

{
  "nome": "Produto 2 Atualizado",
  "preco": 39.99
}
Resposta:

json

{
  "id": "123e4567-e89b-12d3-a456-426614174001",
  "codigo": "P002",
  "nome": "Produto 2 Atualizado",
  "codigo_barras": "7891234567891",
  "quantidade": 50.00,
  "preco": 39.99,
  "created_at": "2023-10-01T12:00:00.000Z",
  "updated_at": "2023-10-01T12:05:00.000Z"
}
Deletar um Produto
Requisição:

http

DELETE /produtos/P002
Authorization: Bearer <token>
Resposta:

http

HTTP/1.1 200 OK
3. Usuários
Criar um Usuário
Requisição:

http

POST /users
Content-Type: application/json

{
  "email": "novo@example.com",
  "password": "senha123"
}
Resposta:

json

{
  "id": "123e4567-e89b-12d3-a456-426614174002",
  "email": "novo@example.com",
  "created_at": "2023-10-01T12:00:00.000Z",
  "updated_at": "2023-10-01T12:00:00.000Z"
}

## readme criado com auxilio de IA.