import { Question, QuizOption, ScoreMap, ProfileType } from '@/types/quiz';

export const levelQuestion: Question = {
  id: 'level',
  text: "Você já teve contato com jogos de cartas (Pokémon, Yu-Gi-Oh, Magic, etc)?",
  options: [
    { text: "Nunca joguei", scores: {} },
    { text: "Já joguei algumas vezes", scores: {} },
    { text: "Jogo ocasionalmente", scores: {} },
    { text: "Jogo com frequência", scores: {} }
  ]
};

export const baseQuestions: Question[] = [
  {
    id: 'base1',
    text: "Quando você precisa resolver algo importante, qual abordagem mais combina com você?",
    options: [
      { text: "Tomo uma decisão rápida e sigo em frente", scores: { AGG: 2 } },
      { text: "Analiso brevemente antes de decidir", scores: { TACT: 1, CTRL: 1 } },
      { text: "Organizo um plano antes de agir", scores: { ENG: 2 } },
      { text: "Prefiro observar melhor antes de agir", scores: { CTRL: 2 } }
    ]
  },
  {
    id: 'base2',
    text: "Em situações de pressão, você tende a:",
    options: [
      { text: "Agir imediatamente para resolver", scores: { AGG: 2 } },
      { text: "Agir com cautela, avaliando riscos", scores: { ADAPT: 2 } },
      { text: "Parar para analisar antes de agir", scores: { CTRL: 2 } },
      { text: "Evitar agir até ter mais segurança", scores: { ENG: 1, CTRL: 1 } }
    ]
  },
  {
    id: 'base3',
    text: "Sobre a forma como você se organiza:",
    options: [
      { text: "Costumo agir de forma mais impulsiva", scores: { AGG: 2 } },
      { text: "Me adapto conforme a situação", scores: { ADAPT: 2 } },
      { text: "Tento manter alguma organização", scores: { TACT: 2 } },
      { text: "Prefiro tudo bem estruturado", scores: { ENG: 2 } }
    ]
  },
  {
    id: 'base4',
    text: "Quando algo não sai como esperado, você:",
    options: [
      { text: "Muda rapidamente de estratégia", scores: { AGG: 1, ADAPT: 1 } },
      { text: "Ajusta o que for necessário e continua", scores: { ADAPT: 2 } },
      { text: "Reavalia com calma antes de agir", scores: { CTRL: 2 } },
      { text: "Prefere evitar erros com planejamento prévio", scores: { ENG: 2 } }
    ]
  }
];

export const adaptiveQuestions: {
  NEVER_PLAYED: Question[];
  OCCASIONAL: Question[];
  FREQUENT: Question[];
} = {
  NEVER_PLAYED: [
    {
      id: 'never1',
      text: "Qual dessas formas mais combina com você?",
      options: [
        { text: "Resolver rapidamente", scores: { AGG: 2 } },
        { text: "Manter controle da situação", scores: { CTRL: 2 } },
        { text: "Encontrar soluções inteligentes", scores: { TACT: 2 } },
        { text: "Fazer tudo funcionar bem", scores: { ENG: 2 } }
      ]
    },
    {
      id: 'never2',
      text: "Em um desafio novo, você prefere:",
      options: [
        { text: "Começar e aprender fazendo", scores: { AGG: 2 } },
        { text: "Esperar o momento certo", scores: { CTRL: 2 } },
        { text: "Explorar possibilidades", scores: { TACT: 2 } },
        { text: "Planejar antes de agir", scores: { ENG: 2 } }
      ]
    }
  ],
  OCCASIONAL: [
    {
      id: 'occ1',
      text: "Em jogos, você tende a:",
      options: [
        { text: "Partir para ação", scores: { AGG: 2 } },
        { text: "Controlar o ritmo", scores: { CTRL: 2 } },
        { text: "Esperar o melhor momento", scores: { TACT: 2 } },
        { text: "Planejar suas jogadas", scores: { ENG: 2 } }
      ]
    },
    {
      id: 'occ2',
      text: "Você prefere jogos que:",
      options: [
        { text: "São rápidos e dinâmicos", scores: { AGG: 2 } },
        { text: "Permitem adaptação", scores: { ADAPT: 2 } },
        { text: "Valorizam estratégia", scores: { TACT: 2 } },
        { text: "Evoluem ao longo do tempo", scores: { ENG: 2 } }
      ]
    }
  ],
  FREQUENT: [
    {
      id: 'freq1',
      text: "Qual estilo mais te atrai?",
      options: [
        { text: "Pressão desde o início", scores: { AGG: 2 } },
        { text: "Controle do jogo", scores: { CTRL: 2 } },
        { text: "Punir erros do adversário", scores: { TACT: 2 } },
        { text: "Sinergia e construção", scores: { ENG: 2 } }
      ]
    },
    {
      id: 'freq2',
      text: "Como você define seu estilo?",
      options: [
        { text: "Agressivo", scores: { AGG: 2 } },
        { text: "Controlador", scores: { CTRL: 2 } },
        { text: "Técnico", scores: { TACT: 2 } },
        { text: "Estruturado", scores: { ENG: 2 } }
      ]
    }
  ]
};

export function getAllQuestions(level: 'NEVER_PLAYED' | 'OCCASIONAL' | 'FREQUENT'): Question[] {
  return [...baseQuestions, ...adaptiveQuestions[level]];
}
