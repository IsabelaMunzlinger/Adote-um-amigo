# Adote um Amigo 🐾

## Introdução

O projeto "Adote um Amigo 🐾" é um site de adoção de animais, onde usuários podem visualizar e filtrar animais (cães e gatos) disponíveis para adoção. O objetivo é facilitar a busca e ajudar a encontrar o animal ideal para adoção, promovendo uma experiência simples e intuitiva para os usuários.

## Estrutura do Projeto

A estrutura do projeto é composta pelos seguintes arquivos e pastas:


## Detalhamento dos Arquivos

- **index.html**: Este é o arquivo principal que contém a estrutura básica do site. Ele inclui links para o CSS e scripts JavaScript e define a interface do usuário.

- **style.css**: Este arquivo contém o estilo do site, como cores, fontes, layouts e espaçamento. Ele usa o Google Fonts para a fonte `Roboto` e define estilos para o cabeçalho, categorias, lista de animais e o rodapé.

- **app.js**: O arquivo de script JavaScript que lida com a lógica principal do site, como renderização da lista de animais, filtragem por tipo de animal (cães ou gatos), e a funcionalidade de busca.

- **dados.js**: Contém arrays de objetos que representam os animais disponíveis para adoção. Cada animal tem atributos como nome, raça, sexo, idade, descrição, e caminho para a imagem.

- **imagens/**: Esta pasta armazena as imagens usadas no projeto, incluindo as imagens dos animais e o favicon.

## Funcionalidades

1. **Filtragem por Tipo de Animal**: O site permite que o usuário filtre animais por cães ou gatos ao clicar nas respectivas categorias.

2. **Busca por Atributos**: O usuário pode pesquisar animais por raça, sexo, idade ou descrição usando a barra de pesquisa.

3. **Renderização Dinâmica**: A lista de animais é renderizada dinamicamente na página com base nas interações do usuário (filtragem e busca).

## Estilização

O estilo do projeto é simples e amigável, usando uma paleta de cores neutras e um layout responsivo:

- O cabeçalho tem um fundo branco e uma sombra suave para destacá-lo.
- As categorias (Cães e Gatos) são exibidas como botões circulares, com transições suaves ao passar o mouse.
- A lista de animais é exibida em um layout de grade, ajustando-se automaticamente ao tamanho da tela.
- O rodapé é simples, com uma sombra superior para separá-lo do conteúdo principal.

## JavaScript

### Estrutura e Lógica

- **Renderização dos Animais**: A função `renderAnimais(animais)` é responsável por exibir a lista de animais na página. Ela limpa a lista atual e adiciona novos elementos HTML para cada animal.

- **Filtragem por Tipo**: As categorias de cães e gatos têm eventos de clique que filtram a lista de animais com base no tipo escolhido.

- **Busca**: A barra de pesquisa permite ao usuário filtrar a lista de animais com base em texto digitado. A busca é feita comparando o texto com os atributos de cada animal (raça, sexo, idade e descrição).

### Estrutura de Dados

Os dados dos animais são armazenados em arrays no arquivo `dados.js`. Cada animal é representado por um objeto com os seguintes atributos:

```javascript
{
    nome: "Nome do Animal",
    raca: "Raça",
    sexo: "Macho/Fêmea",
    idade: "Idade",
    descricao: "Breve descrição do animal",
    castrado: true/false,
    tempoAdicao: new Date("Data de Adição"),
    imagem: "Caminho/para/imagem.jpg"
}
