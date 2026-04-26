'use client';

import React from 'react';
import { motion } from 'framer-motion';

type DecksScreenProps = {
  onNext: () => void;
};

const decks = [
  { name: "Mega Lucario ex", color: "bg-red-500" },
  { name: "Grimmsnarl ex + Froslass", color: "bg-blue-500" },
  { name: "Team Rocket's Mewtwo ex", color: "bg-purple-500" },
  { name: "Crustle + Kangaskhan + Ogerpon", color: "bg-green-500" },
  { name: "Festival Grounds + Dipplin", color: "bg-orange-500" },
];

const DecksScreen: React.FC<DecksScreenProps> = ({ onNext }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8 flex flex-col items-center justify-center space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
        Escolha um Deck
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {decks.map((deck, index) => (
          <motion.div
            key={index}
            className={`p-6 md:p-8 rounded-3xl shadow-2xl text-center flex items-center justify-center font-bold text-xl md:text-2xl h-32 md:h-48 hover:scale-105 transition-all duration-300 cursor-default ${deck.color} text-white shadow-lg border border-white/20 backdrop-blur-sm`}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {deck.name}
          </motion.div>
        ))}
      </motion.div>
      <motion.button
        onClick={onNext}
        className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-2xl text-xl font-semibold shadow-2xl border-0 transition-all duration-300 tracking-wide"
        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
        whileTap={{ scale: 0.98 }}
      >
        Próximo
      </motion.button>
    </div>
  );
};

export default DecksScreen;
