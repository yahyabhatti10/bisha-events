// ServiceCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Service } from '../../data/servicesData';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/enchanting-events/${service.id}`); // Navigate after scrolling
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-64 relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl mb-4 font-garamond font-semibold text-golden">
          {service.title}
        </h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
