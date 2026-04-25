import { Deck } from '@/types/quiz';

export const decks: Deck[] = [
  {
    profile: 'AGG',
    title: 'Mega Lucario ex',
    subtitle: 'Impacto Imediato',
    description: 'Pressão constante, ritmo acelerado, domínio desde o início.',
    cards: 'Mega Lucario ex, Fighting Energy, Quick Attack, Close Combat',
    color: '#DC2626',
    bgColor: '#FEF2F2'
  },
  {
    profile: 'CTRL',
    title: 'Grimmsnarl ex + Froslass',
    subtitle: 'Controlador de Ritmo',
    description: 'Controle de mesa, desgaste progressivo, domínio estratégico.',
    cards: 'Grimmsnarl ex, Froslass, Psychic Energy, Freeze Dry, Dark Pulse',
    color: '#2563EB',
    bgColor: '#EFF6FF'
  },
  {
    profile: 'TACT',
    title: "Team Rocket's Mewtwo ex",
    subtitle: 'Estrategista',
    description: 'Timing preciso, combinações, decisões que mudam o rumo.',
    cards: "Team Rocket's Mewtwo ex, Psychic Energy, Psystrike, Mind Games",
    color: '#7C3AED',
    bgColor: '#F3E8FF'
  },
  {
    profile: 'ADAPT',
    title: 'Crustle + Kangaskhan + Ogerpon',
    subtitle: 'Adaptável',
    description: 'Resistência, versatilidade, múltiplas formas de responder.',
    cards: 'Crustle, Kangaskhan, Ogerpon, Fighting Energy, Grass Energy, Rock Slide',
    color: '#059669',
    bgColor: '#F0FDF4'
  },
  {
    profile: 'ENG',
    title: 'Festival Grounds + Dipplin',
    subtitle: 'Construtor',
    description: 'Sinergia, planejamento, evolução progressiva da partida.',
    cards: 'Festival Grounds, Dipplin, Grass Energy, Set Up, Sweet Scent',
    color: '#D97706',
    bgColor: '#FEF3C7'
  }
];

export function getDeckByProfile(profile: string): Deck | undefined {
  return decks.find(deck => deck.profile === profile);
}
