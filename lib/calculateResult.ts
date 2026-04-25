import { ScoreMap, ProfileType, Question } from '@/types/quiz';

export function calculateResult(
  scores: ScoreMap,
  answers: number[],
  questions: Question[]
): ProfileType {
  // 1. Encontrar perfil com maior pontuação
  const sorted = Object.entries(scores)
    .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0));
  
  const topScore = sorted[0][1];
  const tiedProfiles = sorted
    .filter(([_, score]) => score === topScore)
    .map(([profile]) => profile as ProfileType);
  
  // Se apenas um, retornar
  if (tiedProfiles.length === 1) {
    return tiedProfiles[0];
  }
  
  // Tiebreakers: questions indices 0, 4, 5
  const tiebreakerIndices: number[] = [0, 4, 5];
  let currentTied: ProfileType[] = [...tiedProfiles];
  
  for (const qIndex of tiebreakerIndices) {
    if (currentTied.length <= 1) break;
    
    const question = questions[qIndex];
    const answerIndex = answers[qIndex];
    
    if (!question || answerIndex < 0 || answerIndex >= question.options.length) {
      continue;
    }
    
    const chosenOption = question.options[answerIndex];
    
    // Sort current tied by score from this option, descending
    currentTied.sort((p1, p2) => {
      const s1 = chosenOption.scores[p1] ?? 0;
      const s2 = chosenOption.scores[p2] ?? 0;
      return s2 - s1;
    });
    
    // Get the top tiebreaker score
    const topTBScore = chosenOption.scores[currentTied[0]] ?? 0;
    
    // Filter to those with topTBScore
    currentTied = currentTied.filter(p => (chosenOption.scores[p] ?? 0) === topTBScore);
  }
  
  // Return the first remaining (fallback)
  return currentTied[0];
}
