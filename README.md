# Teste Técnico da API Text to Speech

---

Instalações necessárias para a execução do projeto: [MySQL](https://dev.mysql.com/downloads/installer/), [Node JS](https://nodejs.org/en/download/) e [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).

---

## Explicação

Este código consiste na simulação de uma comunicação entre cliente e o servidor, para o cadastro e execução de áudios .mp3 por um banco de dados MySQL.
O cliente possui acesso a um aplicativo React, que faz as requisições a um servidor ExpressJS, responsável pela conexão com o banco de dados e pela API do IBM Watson Text to Speech.

**Servidor:** O servidor ExpressJS é executado, realizando a conexão direta com o banco de dados MySQL e conectando-se à porta selecionada na configuração e criando o banco e tabelas se necessário. As requisições esperadas retornam os dados da tabela, inserem novas frases (salvas ao lado do servidor na pasta */server/audios*) e hospedam as mesmas no localhost.
>**Nota:** O arquivo de configuração está ao lado do cliente devido a especificações do React App no ambiente de desenvolvimento.

**Cliente:** O React App executa o Front-End da aplicação, em conjunto com requisições AJAX através das bibliotecas Axios e Axios-React. As requisições são responsáveis por cadastrar novas frases, recuperá-las pelo banco e executá-las através do localhost.

---

## Execução

Primeiramente, é necessária a configuração para a conexão com seu banco de dados local. Estando na raiz do projeto, navegue para a pasta **/client/src/** e selecione o arquivo configs.json para edição.
- "mySQLHost": "*[IP NO QUAL O MYSQL ESTÁ SENDO EXECUTADO]*",
- "mySQLUser": "*[USUÁRIO MYSQL]*",
- "mySQLPassword": "*[SENHA MYSQL]*",
- "mySQLPort": "*[PORTA QUE O MYSQL SE ENCONTRA]*",
- "expressServerPort": *[PORTA LIVRE PARA A EXECUÇÃO DO SERVIDOR EXPRESS]*
>**Nota:** O React app inicia automaticamente na porta 3000, para alterar a porta, altere o script start em */client/package.json* para "set PORT=*[PORTA INUTILIZADA]* && react-scripts start" (para Windows) ou "export PORT=*[PORTA INUTILIZADA]* react-scripts start" (para Linux e MacOS).

---

Por fim, na pasta raiz do projeto, execute o comando:

### `yarn start`

---

### Criado por: [Jonathan Fillipe Lemes](https://github.com/JonathanLemes/)
