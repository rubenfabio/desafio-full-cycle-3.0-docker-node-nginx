# Desafio Full Cycle 3.0 - Nginx com Node.js

Este projeto é a resolução do desafio do módulo de Docker do curso Full Cycle 3.0. O objetivo é criar um ambiente de desenvolvimento com Docker que utilize o Nginx como proxy reverso para uma aplicação Node.js, que por sua vez se conecta a um banco de dados MySQL.

## Funcionalidades

- Ao acessar a aplicação em `http://localhost:8080`, o Nginx redireciona a requisição para a aplicação Node.js.
- A aplicação Node.js insere um novo registro no banco de dados MySQL na tabela `people`.
- A aplicação Node.js exibe a mensagem "Full Cycle Rocks!" e a lista de nomes cadastrados no banco de dados.

## Tecnologias Utilizadas

- Docker
- Docker Compose
- Node.js
- Nginx
- MySQL

## Pré-requisitos

- Docker
- Docker Compose

## Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/rubenfabio/desafio-full-cycle-3.0-docker-node-nginx
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd desafio-full-cycle-3.0-docker-node-nginx
   ```

3. Execute o comando para construir as imagens e iniciar os containers:
   ```bash
   docker-compose up -d --build
   ```

4. Acesse a aplicação em seu navegador:
   [http://localhost:8080](http://localhost:8080)

## Estrutura do Projeto

```
.
├── docker-compose.yml
├── mysql/
├── nginx/
│   ├── Dockerfile.prod
│   └── nginx.conf
└── node/
    ├── Dockerfile
    ├── docker-entrypoint.sh
    ├── index.js
    ├── package-lock.json
    └── package.json
```
