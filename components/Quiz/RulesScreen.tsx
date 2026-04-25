'use client';

import React from 'react';
import { motion } from 'framer-motion';

type RulesScreenProps = {
  onNext: () => void;
};

const RulesScreen: React.FC<RulesScreenProps> = ({ onNext }) => {
  const rules = [
    "Responda com sinceridade - não há respostas certas ou erradas",
    "Sua intuição importa - escolha a opção que mais combina com você",
    "Leia cada pergunta com atenção antes de responder",
    "Você pode voltar e mudar suas respostas a qualquer momento",
    "No final, descubra qual deck escolhe você",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white p-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Como Funciona</h1>
        
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 items-start bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-lg md:text-xl leading-relaxed pt-1">{rule}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={onNext}
          className="w-full mt-12 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl text-xl font-semibold shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Entendi, Próximo
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RulesScreen;
