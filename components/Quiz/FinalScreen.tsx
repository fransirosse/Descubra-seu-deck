'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Deck } from '@/types/quiz';

type FinalScreenProps = {
  deck: Deck;
  onRestart: () => void;
};

const FinalScreen: React.FC<FinalScreenProps> = ({ deck, onRestart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 flex flex-col items-center justify-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="w-full max-w-3xl text-center space-y-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Sua Jornada Começa Agora
        </h1>

        {/* Card principal do deck */}
        <motion.div
          className="rounded-3xl p-12 shadow-2xl border-2"
          style={{
            borderColor: deck.color,
            background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
            backdropFilter: 'blur(10px)',
          }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <p className="text-indigo-300 text-lg mb-4 font-semibold">Seu Deck Escolhido</p>
          
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: deck.color }}
          >
            {deck.title}
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {deck.description}
          </p>

          <div className="h-1 w-24 rounded-full mx-auto mb-8" style={{ backgroundColor: deck.color }} />

          <p className="text-lg text-gray-200">
            {deck.cards}
          </p>
        </motion.div>

        {/* Dicas finais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 rounded-2xl p-8 border border-white/10 space-y-4"
        >
          <h3 className="text-2xl font-bold mb-6">Próximos Passos</h3>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🎯</span>
              <p className="text-lg">Estude as estratégias específicas do seu deck</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">💪</span>
              <p className="text-lg">Pratique e ajuste sua abordagem conforme necessário</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🚀</span>
              <p className="text-lg">Compartilhe seu resultado com amigos</p>
            </div>
          </div>
        </motion.div>

        {/* Botão de reinício */}
        <motion.button
          onClick={onRestart}
          className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-2xl text-xl font-bold shadow-2xl transition-all duration-300 border border-white/20"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          Fazer Quiz Novamente
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FinalScreen;
