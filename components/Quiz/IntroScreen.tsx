'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

interface IntroScreenProps {
  onNext: () => void;
}

const IntroScreen: FC<IntroScreenProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
          Não é você que escolhe o deck. <br className="sm:hidden" />
          É o deck que escolhe você.
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
        >
          Próximo
        </motion.button>
      </motion.div>
    </div>
  );
};

export default IntroScreen;
