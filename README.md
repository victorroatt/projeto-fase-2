# Guia do projeto

**Projeto -** colocar o link aqui

Para o comando clone, devemos estar no local onde queremos criar a pasta do projeto, exemplo abaixo:

_C:\Users\victor\Desktop_

Já para os outros comandos, é necessário estar dentro da raiz do projeto.

_C:\Users\victor\Desktop\projeto-fase-2_

Agora precisamos executar o comando para instalação das bibliotecas:

`npm i`

Com isso podemos visualizar o projeto de três formas diferentes:

### Electron

Executaremos o comando abaixo para visualizarmos o projeto com a biblioteca electron:

`npm start`

### Abrindo arquivo

Podemos também somente abrir o arquivo _index.html_ e iremos ser direcionado para o navegador onde podemos utilizar o site normalmente.

### Servidor Local

A maneira mais eficiente de executarmos é através da extensão _live server_ como foi demonstrado na aula. Primeiramente é necessária a instalação da extensão, após isso abrimos o arquivo _index.html_ no vscode e clicamos em _go live_ no canto inferior direito. Dessa forma os formulários enviarão os dados do formulário para o e-mail adicionado no atributo _action_ do formulário.

Para que você receba o e-mail dos dados, por favor, coloque o e-mail desejado no campo destacado abaixo:

`email@email`

É importante destacar que esse processo é necesario ser feito em todos os formulários para que você receba corretamente a informação.

Por exemplo, caso você queira testar o cadastro de pet, basta realizar o processo descrito acima, porém abrindo o arquivo _cadastroPet.html_, repita isso para todos os arquivos html que contém um formulário, caso queira testá-los.
