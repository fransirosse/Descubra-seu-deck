'use client';

import React from 'react';
import { motion } from 'framer-motion';

type LoadingScreenProps = {
  message?: string;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Calculando seu resultado...',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [0, -20, 0],
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="text-center space-y-12"
      >
        {/* Animação de círculos pulsantes */}
        <div className="flex justify-center gap-4">
          <motion.div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              delay: 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-blue-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              delay: 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Mensagem */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            {message}
          </h1>
          
          <motion.p
            className="text-lg text-indigo-200"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Analisando suas respostas...
          </motion.p>
        </div>

        {/* Barra de progresso */}
        <div className="w-full max-w-xs">
          <div className="h-2 bg-indigo-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
              animate={{ width: ['0%', '100%'] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
