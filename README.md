# Select Pet

Aplicação desenvolvida com HTML, CSS e JavaScript puro. Este projeto exibe imagens aleatórias de cães e gatos utilizando APIs públicas.

## Funcionalidades

- Exibe imagem aleatória de cachorro usando a [Dog CEO API](https://dog.ceo/dog-api/)  
- Exibe imagem aleatória de gato usando a [The Cat API](https://thecatapi.com/)  
- Botão **Surprise me** que busca imagens nas duas APIs simultaneamente e exibe a primeira que responder  

## Tecnologias Utilizadas

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) — estrutura semântica da aplicação  
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) — estilização e layout responsivo  
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — chamadas às APIs e manipulação do DOM  

## Como Funciona

1. O usuário clica em um dos botões para exibir imagem de cachorro, gato ou surpresa.  
2. A aplicação faz requisição para a API correspondente.  
3. A imagem é exibida assim que a resposta chegar.  
4. No botão **Surprise me**, duas requisições são feitas simultaneamente e a primeira que responder é exibida.  
