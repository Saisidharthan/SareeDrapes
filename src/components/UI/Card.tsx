import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-100 p-6';
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className} transition-all duration-300`}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;