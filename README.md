
# 📰 Impacto News

Portal de notícias desenvolvido para apresentar informações de diferentes categorias, com uma interface moderna e organizada.

## 📌 Sobre o projeto

O **Impacto News** é um projeto desenvolvido com o objetivo de praticar e aprimorar habilidades em desenvolvimento Front-End, utilizando React, Next.js e TypeScript.

O portal possui uma página inicial com destaques e cards de notícias, além de páginas individuais para a leitura de cada notícia.

## ✨ Funcionalidades

- Página inicial com apresentação das notícias.
- Exibição de notícias em cards.
- Organização dos dados das notícias em um arquivo centralizado.
- Páginas individuais para cada notícia.
- Navegação entre a página inicial e as notícias.

## 🛠️ Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS

## 📂 Estrutura do projeto

```text
app/
├── Components/
│   ├── Header/
│   ├── Hero/
│   ├── NewsCard/
│   └── NewsGrid/
├── data/
│   └── noticia.ts
├── noticia/
│   └── [id]/
│       └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/diemeson-code/impacto-news.git
```

Entre na pasta do projeto:

```bash
cd impacto-news
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## 📚 Aprendizados

Durante o desenvolvimento, são praticados conceitos como:

- Criação e reutilização de componentes React.
- Organização de pastas e arquivos.
- Tipagem com TypeScript.
- Navegação e rotas dinâmicas no Next.js.
- Separação e reutilização dos dados das notícias.
- Construção de interfaces para aplicações web.

## 👨‍💻 Autor

Desenvolvido por **Diemeson dos Santos**.

Projeto de portfólio para estudos e evolução em desenvolvimento web.
