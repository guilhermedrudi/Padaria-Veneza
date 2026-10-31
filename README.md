# Veneza Salgados

Site institucional da Panificadora e Lanchonete Veneza, de Auriflama - SP, com cardápio, informações sobre a padaria, mapa e contato.

Criei a primeira versão no 1º semestre da faculdade, como projeto para um comércio real da minha região. No 3º semestre, voltei ao código para reorganizar e melhorar o visual, a estrutura e a experiência de uso.


## O que o site tem

- Página única com navegação por seções: início, cardápio, sobre e contato
- Carrossel de salgados com setas para a esquerda e para a direita (também dá para arrastar no celular)
- Seção de bebidas e mapa com a localização da padaria
- Layout responsivo, que se adapta a celular, tablet e computador
- Links clicáveis de telefone e e-mail

## Tecnologias

- HTML5
- CSS3 (variáveis, Flexbox, Grid, `scroll-snap` e media queries)
- JavaScript puro, sem bibliotecas

## Estrutura do projeto

```
veneza-salgados/
├── index.html
├── style.css
├── script.js
├── logo_veneza.png
└── README.md
```

## Como rodar

Não precisa instalar nada. Baixe ou clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/SEU-USUARIO/veneza-salgados.git
cd veneza-salgados
```

## O que mudou da primeira versão

- Carrossel de salgados no lugar da lista longa de cards
- Cards com imagens do mesmo tamanho e estilo mais limpo
- Tipografia e paleta de cores definidas em variáveis CSS
- Cabeçalho fixo e mapa incorporado de forma correta
- Remoção de dependências que não eram usadas (Bootstrap e Font Awesome)
- HTML mais semântico (`main`, `article`, `alt` nas imagens)


