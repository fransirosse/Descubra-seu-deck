'use client';

import React from 'react';
import { useQuizStore } from '@/store/quizStore';
import { questions } from '@/data/questions';
import { profiles } from '@/data/profiles';
import { decks } from '@/data/decks';
import { calculateResult } from '@/lib/calculateResult';
import ProgressBar from './ProgressBar';
import IntroScreen from './IntroScreen';
import DecksScreen from './DecksScreen';
import RulesScreen from './RulesScreen';
import StartScreen from './StartScreen';
import QuestionScreen from './QuestionScreen';
import UpsellScreen from './UpsellScreen';
import LoadingScreen from './LoadingScreen';
import ResultScreen from './ResultScreen';
import FinalScreen from './FinalScreen';

const QuizContainer: React.FC = () => {
  const {
    currentScreen,
    currentQuestionIndex,
    answers,
    scores,
    selectedProfile,
    upsellAccepted,
    setCurrentScreen,
    addAnswer,
    updateScore,
    setSelectedProfile,
    setUpsellAccepted,
    nextQuestion,
    previousQuestion,
    reset,
  } = useQuizStore();

  const currentQuestion = questions[currentQuestionIndex];
  const accentColor = selectedProfile
    ? profiles.find((p) => p.type === selectedProfile)?.color
    : '#3B82F6';

  const handleSelectAnswer = (optionIndex: number) => {
    addAnswer(currentQuestionIndex, optionIndex);
    
    const option = currentQuestion.options[optionIndex];
    Object.entries(option.scores).forEach(([profile, points]) => {
      updateScore(profile as any, points);
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      const resultProfile = calculateResult(scores, answers, questions);
      setSelectedProfile(resultProfile);
      setCurrentScreen('loading');
      setTimeout(() => setCurrentScreen('result'), 2000);
    } else {
      nextQuestion();
    }
  };

  const handleStartQuiz = () => {
    setCurrentScreen('question');
  };

  const handleResultNext = () => {
    setCurrentScreen('upsell');
  };

  const handleUpsellAccept = () => {
    setUpsellAccepted(true);
    const finalDeck = decks.find((d) => d.profile === selectedProfile);
    setCurrentScreen('final');
  };

  const handleUpsellSkip = () => {
    const finalDeck = decks.find((d) => d.profile === selectedProfile);
    setCurrentScreen('final');
  };

  const handleRestart = () => {
    reset();
    setCurrentScreen('intro');
  };

  const selectedDeck = selectedProfile
    ? decks.find((d) => d.profile === selectedProfile)
    : null;

  return (
    <>
      <ProgressBar
        current={currentQuestionIndex}
        total={questions.length}
        accentColor={accentColor}
      />

      <div className="min-h-screen">
        {currentScreen === 'intro' && (
          <IntroScreen onNext={() => setCurrentScreen('decks')} />
        )}

        {currentScreen === 'decks' && (
          <DecksScreen onNext={() => setCurrentScreen('rules')} />
        )}

        {currentScreen === 'rules' && (
          <RulesScreen onNext={() => setCurrentScreen('start')} />
        )}

        {currentScreen === 'start' && (
          <StartScreen onStart={handleStartQuiz} />
        )}

        {currentScreen === 'question' && currentQuestion && (
          <QuestionScreen
            question={currentQuestion}
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNextQuestion}
            onPrevious={previousQuestion}
            selectedAnswerIndex={answers[currentQuestionIndex]}
          />
        )}

        {currentScreen === 'loading' && (
          <LoadingScreen message="Calculando seu resultado..." />
        )}

        {currentScreen === 'result' && selectedProfile && (
          <ResultScreen
            profile={profiles.find((p) => p.type === selectedProfile)!}
            onNext={handleResultNext}
          />
        )}

        {currentScreen === 'upsell' && (
          <UpsellScreen
            onAccept={handleUpsellAccept}
            onSkip={handleUpsellSkip}
          />
        )}

        {currentScreen === 'final' && selectedDeck && (
          <FinalScreen deck={selectedDeck} onRestart={handleRestart} />
        )}
      </div>
    </>
  );
};

export default QuizContainer;
