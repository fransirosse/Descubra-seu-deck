import { create } from 'zustand';
import { QuizState, ProfileType } from '@/types/quiz';

interface QuizActions {
  setCurrentScreen: (screen: QuizState['currentScreen']) => void;
  setExperienceLevel: (level: QuizState['experienceLevel']) => void;
  addAnswer: (questionIndex: number, optionIndex: number) => void;
  updateScore: (profile: ProfileType, points: number) => void;
  setSelectedProfile: (profile: ProfileType) => void;
  setUpsellAccepted: (accepted: boolean) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  reset: () => void;
  getCurrentQuestion: () => number;
}

const initialState: QuizState = {
  currentScreen: 'intro',
  currentQuestionIndex: 0,
  answers: [],
  scores: {
    AGG: 0,
    CTRL: 0,
    TACT: 0,
    ADAPT: 0,
    ENG: 0
  },
  selectedProfile: null,
  experienceLevel: null,
  upsellAccepted: false
};

export const useQuizStore = create<QuizState & QuizActions>((set, get) => ({
  ...initialState,

  setCurrentScreen: (screen) => set({ currentScreen: screen }),
  
  setExperienceLevel: (level) => set({ experienceLevel: level }),
  
  addAnswer: (questionIndex, optionIndex) => 
    set((state) => {
      const newAnswers = [...state.answers];
      newAnswers[questionIndex] = optionIndex;
      return {
        answers: newAnswers
      };
    }),
  
  updateScore: (profile, points) =>
    set((state) => ({
      scores: {
        ...state.scores,
        [profile]: (state.scores[profile] || 0) + points
      }
    })),
  
  setSelectedProfile: (profile) => set({ selectedProfile: profile }),
  
  setUpsellAccepted: (accepted) => set({ upsellAccepted: accepted }),
  
  nextQuestion: () => 
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1
    })),
  
  previousQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1)
    })),
  
  reset: () => set(initialState),
  
  getCurrentQuestion: () => get().currentQuestionIndex
}));
