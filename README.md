# Projeto API de blogs

Este projeto consiste em uma API para gestão e produção de conteúdo de um blog. A API foi desenvolvida utilizando Node.js e o ORM Sequelize para facilitar o CRUD de posts no banco de dados.

Características:
- Autenticação com JWT: Para a criação e gestão de posts, os usuários precisam estar autenticados. A API permite o registro de novos usuários e a autenticação dos mesmos para as ações necessárias.

- CRUD de Posts: Os usuários autenticados têm a capacidade de criar, ler, atualizar e deletar posts. Cada post está associado ao usuário que o criou, permitindo um controle mais refinado sobre as operações disponíveis para cada usuário.

- Categorização: Cada post pode ser associado a uma ou mais categorias. Isso facilita a organização e busca de conteúdo no blog. A API permite a criação e gestão dessas categorias e a associação entre posts e suas respectivas categorias.

## Tecnologias, ferramentas e habilidades
- Docker
- MySQL
- Node.js
- Express
- Sequelize
- API REST e banco de dados
- JWT (JSON Web Token)
- Arquitetura em camadas

 ## Como executar o projeto

<br/>

```bash
# Clone ou baixe o repositório
git clone git@github.com:LarissaSimoes/project_blogs_api.git
# Entre no diretório
cd project_blogs_api
# Instale as dependências
npm install
# Inicie o Docker Compose
docker-compose up -d
# Criar e popular o banco de dados
npm run db
# Iniciar o servidor com live-reload
npm run dev
```

<br /><hr /><br />

<p align='center'>
  Desenvolvido por <b>Larissa Simões</b>
  <br/><br/>

  <a href="https://www.linkedin.com/in/dev-larissa-carneiro-simoes/">
    <img alt="linkedIn" height="30px" src="https://i.imgur.com/TQRXxhT.png" />
  </a>
  &nbsp;&nbsp;
</p>
