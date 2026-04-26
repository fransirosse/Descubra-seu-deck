type Profile = 'AGG' | 'CTRL' | 'TACT' | 'ADAPT' | 'ENG';

type Score = Partial<Record<Profile, 1 | 2>>;

interface Option {
  label: string;
  score: Score;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface LevelOption {
  label: string;
  level: number;
}

interface LevelQuestion {
  id: number;
  text: string;
  options: LevelOption[];
}

export const levelQuestion: LevelQuestion = {
  id: 0,
  text: "Você já teve contato com jogos de cartas (Pokémon, Yu-Gi-Oh, Magic, etc)?",
  options: [
    { label: "Nunca joguei", level: 0 },
    { label: "Já joguei algumas vezes", level: 1 },
    { label: "Jogo ocasionalmente", level: 2 },
    { label: "Jogo com frequência", level: 3 }
  ]
};

export const baseQuestions: Question[] = [
  {
    id: 1,
    text: "Quando você precisa resolver algo importante, qual abordagem mais combina com você?",
    options: [
      { label: "Agir rápido e com impacto", score: { AGG: 2 } },
      { label: "Controlar o ritmo e esperar", score: { CTRL: 2 } },
      { label: "Planejar uma estratégia cuidadosa", score: { TACT: 2 } },
      { label: "Adaptar-me à situação", score: { ADAPT: 2 } },
      { label: "Construir recursos sólidos primeiro", score: { ENG: 2 } }
    ]
  },
  {
    id: 2,
    text: "Em situações de pressão, você tende a:",
    options: [
      { label: "Atacar sem hesitação", score: { AGG: 2 } },
      { label: "Manter o controle e estabilizar", score: { CTRL: 2 } },
      { label: "Analisar e contra-atacar taticamente", score: { TACT: 2 } },
      { label: "Improvisar e virar o jogo", score: { ADAPT: 2 } },
      { label: "Confiar na minha preparação", score: { ENG: 2 } }
    ]
  },
  {
    id: 3,
    text: "Sobre a forma como você se organiza:",
    options: [
      { label: "Listas curtas, ações imediatas", score: { AGG: 2 } },
      { label: "Cronogramas detalhados de ritmo", score: { CTRL: 2 } },
      { label: "Diagramas e planos complexos", score: { TACT: 2 } },
      { label: "Estruturas flexíveis e mutáveis", score: { ADAPT: 2 } },
      { label: "Sistemas robustos e escaláveis", score: { ENG: 2 } }
    ]
  },
  {
    id: 4,
    text: "Quando algo não sai como esperado, você:",
    options: [
      { label: "Mudo para ataque total", score: { AGG: 2 } },
      { label: "Reestabeleço o controle", score: { CTRL: 2 } },
      { label: "Replanejo a estratégia", score: { TACT: 2 } },
      { label: "Adapto o plano no momento", score: { ADAPT: 2 } },
      { label: "Reforço as fundações", score: { ENG: 2 } }
    ]
  }
];

const nuncaQuestions: Question[] = [
  {
    id: 5,
    text: "Qual dessas formas mais combina com você?",
    options: [
      { label: "Ser direto e decisivo", score: { AGG: 2 } },
      { label: "Gerenciar o tempo com paciência", score: { CTRL: 2 } },
      { label: "Pensar em vários passos à frente", score: { TACT: 2 } },
      { label: "Mudar de ideia facilmente", score: { ADAPT: 2 } },
      { label: "Preparar tudo com antecedência", score: { ENG: 2 } }
    ]
  },
  {
    id: 6,
    text: "Em um desafio novo, você prefere:",
    options: [
      { label: "Resolver logo de uma vez", score: { AGG: 2 } },
      { label: "Controlar cada etapa", score: { CTRL: 2 } },
      { label: "Usar truques inteligentes", score: { TACT: 2 } },
      { label: "Aprender enquanto faz", score: { ADAPT: 2 } },
      { label: "Construir do zero com calma", score: { ENG: 2 } }
    ]
  }
];

const jogouOcasQuestions: Question[] = [
  {
    id: 5,
    text: "Em jogos, você tende a:",
    options: [
      { label: "Atacar rápido para vencer cedo", score: { AGG: 2 } },
      { label: "Controlar o jogo e negar jogadas do oponente", score: { CTRL: 2 } },
      { label: "Executar jogadas táticas precisas", score: { TACT: 2 } },
      { label: "Adaptar sua estratégia ao meta", score: { ADAPT: 2 } },
      { label: "Construir sinergias e engines", score: { ENG: 2 } }
    ]
  },
  {
    id: 6,
    text: "Você prefere jogos que:",
    options: [
      { label: "São rápidos e explosivos", score: { AGG: 2 } },
      { label: "Exigem controle de recursos", score: { CTRL: 2 } },
      { label: "Têm muita profundidade estratégica", score: { TACT: 2 } },
      { label: "Variam a cada partida", score: { ADAPT: 2 } },
      { label: "Recompensam builds criativas", score: { ENG: 2 } }
    ]
  }
];

const freqQuestions: Question[] = [
  {
    id: 5,
    text: "Qual estilo mais te atrai?",
    options: [
      { label: "Aggro: pressão constante", score: { AGG: 2 } },
      { label: "Control: dominar o late game", score: { CTRL: 2 } },
      { label: "Midrange/Tempo: transições táticas", score: { TACT: 2 } },
      { label: "Rogue/Adapt: imprevisível", score: { ADAPT: 2 } },
      { label: "Combo/Engine: construções complexas", score: { ENG: 2 } }
    ]
  },
  {
    id: 6,
    text: "Como você define seu estilo?",
    options: [
      { label: "Agressivo e implacável", score: { AGG: 2 } },
      { label: "Paciente e controlador", score: { CTRL: 2 } },
      { label: "Tático e calculista", score: { TACT: 2 } },
      { label: "Flexível e adaptável", score: { ADAPT: 2 } },
      { label: "Construtor de sinergias", score: { ENG: 2 } }
    ]
  }
];

export const adaptiveQuestions: Record<number, Question[]> = {
  0: nuncaQuestions,
  1: jogouOcasQuestions,
  2: jogouOcasQuestions,
  3: freqQuestions
};

export function getQuizQuestions(level: number): Question[] {
  return [
    ...baseQuestions,
    ...adaptiveQuestions[level]
  ];
}

export type { Question, Option, LevelQuestion, Profile, Score };
