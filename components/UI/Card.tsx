'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  accentColor?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  accentColor,
  className = ''
}) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200/50 ${className}`}
      style={{
        borderLeftColor: accentColor || '#e5e7eb',
        borderLeftWidth: accentColor ? '4px' : '1px',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {title && (
        <h3
          className="text-2xl font-bold mb-6 tracking-tight"
          style={{ color: accentColor || '#1f2937' }}
        >
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
