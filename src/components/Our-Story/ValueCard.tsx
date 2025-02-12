// components/ValueCard.tsx
import { motion } from 'framer-motion';
import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-6 rounded-lg shadow-lg text-center"
    >
      <h3 className="text-2xl mb-4 font-garamond font-semibold text-golden">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ValueCard;
