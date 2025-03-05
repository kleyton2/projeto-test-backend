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


## readme criado com auxilio de IA.