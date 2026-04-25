'use client';

import React from 'react';
import { motion } from 'framer-motion';

type UpsellScreenProps = {
  onAccept: () => void;
  onSkip: () => void;
};

const UpsellScreen: React.FC<UpsellScreenProps> = ({ onAccept, onSkip }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white p-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Guia Completo
        </h1>
        
        <p className="text-lg md:text-xl text-amber-100 mb-8 text-center leading-relaxed">
          Quer entender melhor seu deck? Receba um guia completo com estratégias, dicas e combinações para dominar seu estilo.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-8"
        >
          <div className="flex items-center gap-3 text-amber-100">
            <span className="text-2xl">✓</span>
            <p>Estratégias personalizadas para seu perfil</p>
          </div>
          <div className="flex items-center gap-3 text-amber-100">
            <span className="text-2xl">✓</span>
            <p>Dicas de como evoluir seu jogo</p>
          </div>
          <div className="flex items-center gap-3 text-amber-100">
            <span className="text-2xl">✓</span>
            <p>Análise detalhada do seu deck</p>
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.button
            onClick={onAccept}
            className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-xl text-xl font-bold shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero o Guia
          </motion.button>
          
          <motion.button
            onClick={onSkip}
            className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl text-xl font-bold shadow-lg transition-all duration-300 border border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Pular por Agora
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default UpsellScreen;
