# CardioSense Frontend

Este repositório contém o **Frontend** da aplicação **CardioSense**, uma interface simples em **HTML**, **CSS**, e **JavaScript** que interage com a API do backend para prever se um paciente tem ou não doenças cardíacas. O frontend coleta dados do usuário por meio de um formulário e envia os dados para a API, que retorna a predição.

## Índice
- [CardioSense Frontend](#cardiosense-frontend)
  - [Índice](#índice)
  - [Descrição](#descrição)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Uso](#uso)
    - [Exemplo de Uso](#exemplo-de-uso)
  - [Integração com o Backend](#integração-com-o-backend)

## Descrição

O **CardioSense Frontend** é uma interface simples que permite ao usuário inserir os dados necessários para realizar a previsão de doenças cardíacas. Esses dados são enviados à API (desenvolvida em Flask no backend), que retorna a probabilidade do paciente ter ou não uma doença cardíaca. A interface é composta por um formulário em HTML e uma resposta dinâmica utilizando JavaScript para exibir os resultados.

## Estrutura do Projeto

A estrutura do projeto é bastante simples e contém os seguintes arquivos:

```
├── index.html # Página principal de apresentação que direciona para o formulário
├── form.html # Página com o formulário
├── css/ 
│ └── styles.css # Estilos CSS para o frontend
│ └── tela.css # Estilos adicionais do template
├── js/ 
│ └── scripts.js # Lógica JavaScript para interagir com a API 
├── img/ 
│ └── background.jpg # Imagem com fundo da página inicial
└── README.md # Documentação do projeto
```

## Uso

1. Preenchendo o formulário: Abra a página form.html, onde será exibido um formulário. Nele, você poderá inserir os dados relacionados à idade, sexo, pressão arterial, colesterol, entre outros parâmetros do paciente.

2. Submetendo os dados: Após preencher o formulário, clique no botão "Avaliar Paciente". O frontend enviará uma requisição para a API do CardioSense com os dados inseridos.

3. Recebendo o resultado: O sistema irá mostrar na tela se o paciente tem ou não uma probabilidade alta de ter doença cardíaca.

### Exemplo de Uso

1. Insira os dados no formulário:

* Idade: 50
* Sexo: Masculino
* Pressão Arterial: 130
* Colesterol: 245
* ...

2. Clique em "Avaliar Paciente" e aguarde a resposta.

O resultado será exibido em uma tabela abaixo do formulário.

## Integração com o Backend

Este frontend foi projetado para funcionar com a API do projeto CardioSense. Para que a integração funcione corretamente, você deve garantir que o Backend (API) esteja rodando localmente ou em um servidor, e que o URL da API esteja configurado corretamente no arquivo scripts.js.

