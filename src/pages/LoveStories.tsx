import React from 'react';
import { motion } from 'framer-motion';

const LoveStories = () => {
  const testimonials = [
    {
      name: "Sarah & Ahmed",
      event: "Wedding Reception",
      quote: "Bisha Events turned our dream wedding into reality. Every detail was perfect!",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Fatima & Hassan",
      event: "Engagement Ceremony",
      quote: "The attention to detail and creativity exceeded our expectations!",
      image: "https://images.unsplash.com/photo-1519657337289-077653f724ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Zara & Ali",
      event: "Destination Wedding",
      quote: "They made our destination wedding feel like a fairy tale come true.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="section-title">Love Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <h3 className="text-2xl font-great-vibes mb-2">{testimonial.name}</h3>
                  <p className="text-sm mb-4">{testimonial.event}</p>
                  <p className="italic">{testimonial.quote}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoveStories;