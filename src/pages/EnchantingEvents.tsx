// EnchantingEvents.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/Enchanting-Events/ServiceCard';
import { services } from '../data/servicesData';

const EnchantingEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="section-title">Enchanting Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EnchantingEvents;
