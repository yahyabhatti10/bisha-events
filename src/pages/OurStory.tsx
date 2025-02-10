import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const teamMembers = [
    {
      name: "Harris Saeed",
      role: "Catering & Food",
      description: "Owner of Red Chilli Restaurant, bringing years of culinary excellence.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Bisma Harris",
      role: "Décor Designer & Event Planner",
      description: "Creative visionary with a passion for transforming spaces into magical settings.",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every detail of your event."
    },
    {
      title: "Creativity",
      description: "Each event is uniquely designed to reflect your personal style."
    },
    {
      title: "Reliability",
      description: "We deliver on our promises, ensuring peace of mind."
    },
    {
      title: "Passion",
      description: "We pour our heart into making your dreams come true."
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
        {/* Our Story Section */}
        <h1 className="section-title">Our Story</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-lg mb-6">
              Founded with a vision to transform events into unforgettable experiences, 
              Bisha Events has become Lahore's premier luxury event planning service.
            </p>
            <p className="text-lg mb-6">
              Our journey began when Bisma Harris, a passionate décor designer, 
              joined forces with Harris Saeed, the renowned owner of Red Chilli Restaurant, 
              combining their expertise in event aesthetics and culinary excellence.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Event Planning"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Meet Our Team Section */}
        <h2 className="section-title">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2">{member.name}</h3>
                <p className="text-golden mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Values Section */}
        <h2 className="section-title">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurStory;