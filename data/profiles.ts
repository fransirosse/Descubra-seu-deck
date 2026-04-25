import { ProfileType } from '@/types/quiz';

interface Profile {
  readonly type: ProfileType;
  name: string;
  description: string;
  deckTitle: string;
  fullText: string;
  color: string;
  bgColor: string;
}

export const profiles: Profile[] = [
  {
    type: 'AGG',
    name: 'IMPACTO IMEDIATO',
    description: `Você é uma pessoa direta, objetiva e orientada à ação.
Prefere tomar decisões rápidas, assumir o controle da situação e não depender de planos longos para avançar.`,
    deckTitle: 'Mega Lucario ex',
    fullText: `Você é uma pessoa direta, objetiva e orientada à ação.
Prefere tomar decisões rápidas, assumir o controle da situação e não depender de planos longos para avançar.
Em vez de esperar, você faz acontecer.
No jogo, isso se traduz em pressão constante, ritmo acelerado e domínio desde os primeiros movimentos.
Você recebeu: Mega Lucario ex
Esse deck foi feito para jogadores que gostam de intensidade.
Ele permite ataques rápidos, decisões diretas e controle do ritmo da partida desde o início.
Você não espera o jogo acontecer — você conduz o jogo.
Ideal para quem gosta de partidas dinâmicas, decisões rápidas e sensação de controle imediato.`,
    color: '#DC2626',
    bgColor: '#FEF2F2'
  },
  {
    type: 'CTRL',
    name: 'CONTROLADOR DE RITMO',
    description: `Você prefere pensar antes de agir e tomar decisões com segurança.
Não se deixa levar pela pressa — prefere entender o cenário e agir no momento certo.`,
    deckTitle: 'Grimmsnarl ex + Froslass',
    fullText: `Você prefere pensar antes de agir e tomar decisões com segurança.
Não se deixa levar pela pressa — prefere entender o cenário e agir no momento certo.
Você constrói vantagem com consistência e paciência.
No jogo, isso se traduz em controle de mesa, desgaste progressivo e domínio estratégico da partida.
Você recebeu: Grimmsnarl ex + Froslass
Esse deck é focado em controle e pressão constante ao longo do tempo.
Ele permite que você limite as opções do adversário e construa vantagem de forma gradual.
Você não precisa correr — você conduz o jogo no seu ritmo.
Ideal para quem gosta de estratégia, controle e vitórias construídas passo a passo.`,
    color: '#2563EB',
    bgColor: '#EFF6FF'
  },
  {
    type: 'TACT',
    name: 'ESTRATEGISTA',
    description: `Você valoriza inteligência, leitura de cenário e decisões bem calculadas.
Prefere encontrar oportunidades e fazer jogadas que realmente mudam o rumo da partida.`,
    deckTitle: "Team Rocket's Mewtwo ex",
    fullText: `Você valoriza inteligência, leitura de cenário e decisões bem calculadas.
Prefere encontrar oportunidades e fazer jogadas que realmente mudam o rumo da partida.
Você não joga no automático — você pensa o jogo.
No jogo, isso se traduz em timing preciso, combinações e decisões que fazem diferença no momento certo.
Você recebeu: Team Rocket's Mewtwo ex
Esse deck recompensa leitura de jogo, estratégia e execução no momento ideal.
Ele funciona melhor nas mãos de quem sabe observar, planejar e agir com precisão.
Você não vence pela força — você vence pela decisão certa.
Ideal para quem gosta de jogadas inteligentes e impacto estratégico.`,
    color: '#7C3AED',
    bgColor: '#F3E8FF'
  },
  {
    type: 'ADAPT',
    name: 'ADAPTÁVEL',
    description: `Você não depende de um único plano para lidar com situações.
Prefere segurança, flexibilidade e capacidade de ajuste conforme o cenário muda.`,
    deckTitle: 'Crustle + Kangaskhan + Ogerpon',
    fullText: `Você não depende de um único plano para lidar com situações.
Prefere segurança, flexibilidade e capacidade de ajuste conforme o cenário muda.
Você se adapta — e isso te dá vantagem.
No jogo, isso se traduz em resistência, versatilidade e múltiplas formas de responder ao adversário.
Você recebeu: Crustle + Kangaskhan + Ogerpon
Esse deck oferece estabilidade e opções durante toda a partida.
Ele permite ajustes de estratégia conforme o jogo evolui, sem depender de uma única linha de ação.
Você não precisa prever tudo — você sabe reagir.
Ideal para quem valoriza consistência, segurança e flexibilidade.`,
    color: '#059669',
    bgColor: '#F0FDF4'
  },
  {
    type: 'ENG',
    name: 'CONSTRUTOR',
    description: `Você gosta de organização, lógica e de ver tudo funcionando de forma eficiente.
Prefere estruturar bem suas decisões e construir algo sólido ao longo do tempo.`,
    deckTitle: 'Festival Grounds + Dipplin',
    fullText: `Você gosta de organização, lógica e de ver tudo funcionando de forma eficiente.
Prefere estruturar bem suas decisões e construir algo sólido ao longo do tempo.
Para você, consistência é mais importante do que velocidade.
No jogo, isso se traduz em sinergia, planejamento e evolução progressiva da partida.
Você recebeu: Festival Grounds + Dipplin
Esse deck funciona como uma estrutura bem organizada, onde cada peça tem um papel claro.
Quando bem executado, ele se torna consistente, estável e difícil de parar.
Você não joga no impulso — você constrói o jogo.
Ideal para quem gosta de estratégia estruturada e funcionamento contínuo.`,
    color: '#D97706',
    bgColor: '#FEF3C7'
  }
];
