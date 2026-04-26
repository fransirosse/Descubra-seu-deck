// tipos para perguntas
export type ProfileType = 'AGG' | 'CTRL' | 'TACT' | 'ADAPT' | 'ENG';

export interface ScoreMap {
  AGG?: number;
  CTRL?: number;
  TACT?: number;
  ADAPT?: number;
  ENG?: number;
}

export interface QuizOption {
  text: string;
  scores: ScoreMap;
}

export interface Question {
  id: string;
  text: string;
  options: QuizOption[];
  adaptiveTrigger?: 'NEVER_PLAYED' | 'OCCASIONAL' | 'FREQUENT';
}

export interface Deck {
  profile: ProfileType;
  title: string;
  subtitle: string;
  description: string;
  cards: string;
  color: string;
  bgColor: string;
}

export interface Profile {
  type: ProfileType;
  name: string;
  description: string;
  deckTitle: string;
  deckSubtitle?: string;
  fullText: string;
  color: string;
  bgColor: string;
}

export interface QuizState {
  currentScreen: 'intro' | 'decks' | 'rules' | 'start' | 'upsell' | 'question' | 'loading' | 'result' | 'final';
  currentQuestionIndex: number;
  answers: number[];
  scores: ScoreMap;
  selectedProfile: ProfileType | null;
  experienceLevel: 'NEVER_PLAYED' | 'OCCASIONAL' | 'FREQUENT' | null;
  upsellAccepted: boolean;
}
