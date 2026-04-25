'use client';

import React from 'react';
import { motion } from 'framer-motion';

type StartScreenProps = {
  onStart: () => void;
};

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white p-8 flex flex-col items-center justify-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
          Pronto para Descobrir?
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Você está a apenas algumas perguntas de distância de descobrir qual deck escolhe você. Vamos começar?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-4 w-full max-w-md"
      >
        <motion.button
          onClick={onStart}
          className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl text-2xl font-bold shadow-2xl transition-all duration-300 border border-white/20"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          Iniciar Quiz
        </motion.button>

        <p className="text-center text-purple-200 text-sm">
          ⏱️ Leva apenas 2-3 minutos
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 text-purple-300 text-center text-sm"
      >
        <p>✨ Sua jornada começa agora</p>
      </motion.div>
    </div>
  );
};

export default StartScreen;
