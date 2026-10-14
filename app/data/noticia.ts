
export type Noticia = {
  id: string;
  categoria: string;
  titulo: string;
  resumo: string;
  data: string;
  imagem: string;
  conteudo: string;
};

export const noticias: Noticia[] = [
  {
    id: "1",
    categoria: "Tecnologia",
    titulo: "Inteligência artificial transforma o mercado de trabalho",
    resumo:
      "Novas ferramentas estão mudando a forma como empresas e profissionais trabalham.",
    data: "10 de outubro de 2026",
    imagem:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    conteudo:
      "A inteligência artificial está transformando a maneira como empresas e profissionais realizam suas atividades. Novas ferramentas ajudam a automatizar tarefas, analisar informações e desenvolver soluções digitais.\n\nEsse cenário também aumenta a importância de profissionais preparados para aprender novas tecnologias e utilizar essas ferramentas de maneira responsável.",
  },
  {
    id: "2",
    categoria: "Brasil",
    titulo: "Inovação impulsiona novos negócios no país",
    resumo:
      "Empreendedores investem em soluções digitais para ampliar seus negócios.",
    data: "10 de outubro de 2026",
    imagem:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    conteudo:
      "A inovação digital abre novas possibilidades para empresas brasileiras. Soluções tecnológicas podem ajudar negócios a melhorar processos, atender clientes e encontrar oportunidades de crescimento.\n\nO planejamento e a qualificação profissional são importantes para aproveitar essas oportunidades.",
  },
  {
    id: "3",
    categoria: "Mundo",
    titulo: "Tecnologia aproxima pessoas ao redor do mundo",
    resumo:
      "A conectividade amplia as possibilidades de comunicação e colaboração.",
    data: "10 de outubro de 2026",
    imagem:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    conteudo:
      "As tecnologias de comunicação permitem que pessoas e organizações colaborem mesmo estando em diferentes países.\n\nA conectividade facilita o compartilhamento de informações e cria novas possibilidades de colaboração.",
  },
  {
id: "4",
categoria: "Esportes",
titulo: "Tecnologia ganha espaço na preparação de atletas",
resumo:
"Equipamentos e análise de dados ajudam equipes a acompanhar o desempenho esportivo.",
data: "13 de outubro de 2026",
imagem:
"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
conteudo:
"A tecnologia vem sendo utilizada na preparação de atletas de diferentes modalidades. Sensores, vídeos e ferramentas de análise ajudam treinadores a acompanhar o desempenho e identificar pontos que podem ser aprimorados.\n\nEsses recursos podem contribuir para o planejamento dos treinos, respeitando as características e as necessidades de cada atleta.",
},
{
id: "5",
categoria: "Esportes",
titulo: "Atividade física reforça a importância da disciplina",
resumo:
"A regularidade nos treinos é um dos fatores importantes para a evolução esportiva.",
data: "13 de outubro de 2026",
imagem:
"https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
conteudo:
"A prática esportiva exige dedicação, planejamento e constância. A evolução depende de fatores como treinamento adequado, descanso e acompanhamento profissional.\n\nEstabelecer metas realistas e respeitar os limites individuais são atitudes importantes para manter uma rotina esportiva sustentável.",
},
];
