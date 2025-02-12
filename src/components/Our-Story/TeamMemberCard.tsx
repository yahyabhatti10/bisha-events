// components/TeamMemberCard.tsx
import { motion } from 'framer-motion';
import React from 'react';
import { TeamMember } from '../../data/ourStoryData';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden p-6 text-center"
    >
      <div className="flex justify-center mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="h-40 w-40 object-cover rounded-full"
        />
      </div>
      <h3 className="text-2xl mb-2 font-garamond font-semibold text-golden">
        {member.name}
      </h3>
      <p className="text-golden mb-4">{member.role}</p>
      <p className="text-gray-600">{member.description}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
