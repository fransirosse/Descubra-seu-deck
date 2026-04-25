'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  current: number
  total: number
  accentColor?: string
}

const ProgressBar: React.FC<Props> = ({ current, total, accentColor }) => {
  const progress = Math.min((current / total) * 100, 100)

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50"
      style={{ height: '4px' }}
    >
      <motion.div
        className="h-full rounded"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        style={{ backgroundColor: accentColor || '#3B82F6' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  )
}

export default ProgressBar
