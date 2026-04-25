'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Profile } from '@/types/quiz';

type ResultScreenProps = {
  profile: Profile;
  onNext: () => void;
};

const ResultScreen: React.FC<ResultScreenProps> = ({ profile, onNext }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareText = `Descobri meu deck no "Descubra seu Deck"! 🎴 Sou ${profile.name}. Qual é o seu? Descubra em: [seu-site.com]`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Descubra seu Deck',
          text: shareText,
        });
      } catch (err) {
        console.log('Compartilhamento cancelado');
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="min-h-screen text-white p-8 flex flex-col items-center justify-center space-y-8"
      style={{ 
        background: `linear-gradient(to bottom right, ${profile.bgColor}, rgba(0,0,0,0.3))`,
      }}
    >
      {/* Confete animado */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ 
              backgroundColor: profile.color,
              left: `${Math.random() * 100}%`,
              top: '-10px'
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>

      {/* Cartão do resultado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="relative z-10 w-full max-w-2xl text-center space-y-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold">Parabéns! 🎉</h1>
        
        {/* Card do perfil */}
        <motion.div
          className="rounded-3xl p-10 shadow-2xl border-4"
          style={{
            borderColor: profile.color,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-2xl font-semibold text-white/80 mb-4">Seu Deck é:</p>
          
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: profile.color }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {profile.deckTitle}
          </motion.h2>

          <div className="h-1 w-20 rounded-full mx-auto mb-6" style={{ backgroundColor: profile.color }} />

          <p className="text-xl text-white/90 leading-relaxed mb-8">
            {profile.name}
          </p>

          <p className="text-lg text-white/70 leading-relaxed">
            {profile.description}
          </p>
        </motion.div>

        {/* Botões de ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 pt-4"
        >
          <motion.button
            onClick={handleShare}
            className="w-full px-8 py-4 rounded-2xl text-xl font-bold transition-all duration-300 border-2"
            style={{
              borderColor: profile.color,
              backgroundColor: profile.color,
              color: 'white',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {copied ? '✓ Copiado!' : '📤 Compartilhar'}
          </motion.button>

          <motion.button
            onClick={onNext}
            className="w-full px-8 py-4 rounded-2xl text-xl font-bold transition-all duration-300 border-2 border-white/30 hover:border-white/60 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Guia Completo →
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultScreen;
