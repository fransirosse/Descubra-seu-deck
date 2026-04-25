'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@/types/quiz';

type QuestionScreenProps = {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onSelectAnswer: (optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  selectedAnswerIndex?: number;
};

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onSelectAnswer,
  onNext,
  onPrevious,
  selectedAnswerIndex,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const optionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 flex flex-col">
      {/* Header com numeração */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <p className="text-slate-400 text-lg mb-4">
          Pergunta {currentIndex + 1} de {totalQuestions}
        </p>
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Pergunta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-center justify-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center max-w-3xl leading-tight mb-12">
          {question.text}
        </h2>

        {/* Opções */}
        <motion.div
          className="w-full max-w-2xl space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                variants={optionVariants}
                onClick={() => onSelectAnswer(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full p-6 rounded-2xl text-left font-semibold text-lg transition-all duration-300 border-2 ${
                  selectedAnswerIndex === index
                    ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/50'
                    : 'bg-slate-700/50 border-slate-600 hover:bg-slate-700 hover:border-slate-500'
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedAnswerIndex === index
                        ? 'bg-blue-500 border-blue-300'
                        : 'border-slate-500'
                    }`}
                  >
                    {selectedAnswerIndex === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    )}
                  </div>
                  {option.text}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Botões de navegação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 justify-between items-center"
      >
        <motion.button
          onClick={onPrevious}
          className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Anterior
        </motion.button>

        <motion.button
          onClick={onNext}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
            selectedAnswerIndex !== undefined
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 cursor-pointer'
              : 'bg-slate-700 opacity-50 cursor-not-allowed'
          }`}
          disabled={selectedAnswerIndex === undefined}
          whileHover={selectedAnswerIndex !== undefined ? { scale: 1.05 } : {}}
          whileTap={selectedAnswerIndex !== undefined ? { scale: 0.95 } : {}}
        >
          {currentIndex === totalQuestions - 1 ? 'Ver Resultado' : 'Próximo'} →
        </motion.button>
      </motion.div>
    </div>
  );
};

export default QuestionScreen;
