
# Chat em Tempo Real utilizando React, Socket.IO e Node.js

## Sumário:
1. O que é?
2. Como instalar?
3. Tecnologias Utilizadas


## O Projeto?
O Chat em Tempo Real é uma aplicação desenvolvida no GitHub que permite a comunicação em tempo real entre usuários conectados. Através dessa aplicação, os usuários podem trocar mensagens instantaneamente, criando uma experiência de chat dinâmica e interativa.

O front-end da aplicação foi construído utilizando o framework React, que permite a criação de interfaces de usuário reativas e componentizadas. O estilo da interface foi desenvolvido com o auxílio do Bootstrap, proporcionando um design moderno e responsivo para a aplicação.

Já o back-end foi desenvolvido em Node.js utilizando o framework Express, que facilita a criação de APIs e rotas. Para a comunicação em tempo real, a aplicação utiliza a biblioteca Socket.IO, que implementa o protocolo WebSocket, permitindo a transmissão instantânea de eventos entre o servidor e o cliente.

## Como instalar?
Para instalar e executar a aplicação em sua máquina local, siga os passos abaixo:

Certifique-se de que você possui o Node.js instalado em sua máquina. Caso não possua, você pode fazer o download e instalação no site oficial: https://nodejs.org/

- Clone este repositório do GitHub para sua máquina local usando o seguinte comando:

```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
- Acesse as pastas do projeto:
```bash
    cd ./back-end

    cd ./front-end
```

- Baixe as dependencias das duas pastas ( Back-end e Front-end)
```bash
    npm i 
```
obs: O npm install deve ser rodado nas duas aplicações para que tudo funcione bem

- Inicie as duas aplicações

```bash
    npm run dev
```
obs: esse comando serve para iniciar as duas aplicações tanto o front quanto o back-end


A aplicação do Chat em Tempo Real estará disponível em seu navegador, através do endereço: http://localhost:5173/ ou algo assim , verifique o console

## Tecnologias Utilizadas
### As principais tecnologias utilizadas na criação desta aplicação incluem:

#### Front-end:

- React: Framework JavaScript para criação de interfaces de usuário reativas.
- Bootstrap: Framework CSS para estilização e design responsivo.
- react-router-dom: Biblioteca para gerenciamento de rotas no React.

#### Back-end:

- Node.js: Ambiente de execução do JavaScript do lado do servidor.
- Express: Framework Node.js para criação de APIs e rotas.
- Socket.IO: Biblioteca que implementa a comunicação via WebSockets para interação em - tempo real.
- Outros:

>Nodemon: Ferramenta que monitora alterações no código e reinicia automaticamente o servidor.
Cors: Middleware utilizado para permitir requisições entre diferentes domínios (Cross-Origin Resource Sharing).
Essas tecnologias foram escolhidas para proporcionar uma experiência de chat em tempo real eficiente, moderna e interativa, tanto para o desenvolvedor quanto para o usuário final.
