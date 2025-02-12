// pages/OurStory.tsx
import { motion } from 'framer-motion';
import ourStory from '../assets/our-story/our-story.png';
import { teamMembers, values } from '../data/ourStoryData';
import TeamMemberCard from '../components/Our-Story/TeamMemberCard';
import ValueCard from '../components/Our-Story/ValueCard';

const OurStory = () => {
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
              At Bisha Events, we create unforgettable experiences where every
              detail reflects elegance and luxury. Founded by Bisma Harris, a
              visionary décor designer, and Harris Saeed, owner of Red Chilli
              Restaurant, we blend stunning aesthetics with gourmet excellence
              to craft breathtaking celebrations.
            </p>
            <p className="text-lg mb-6">
              From intimate weddings to grand events, we transform venues with
              elegant décor, ambient lighting, and personalized themes. Our
              exceptional catering ensures every dish complements the occasion.
              At Bisha Events, we turn your dreams into timeless memories with
              perfection in every detail.
            </p>
            <p className="text-lg mb-6">
              With a passion for storytelling through design and flavor, we
              curate events that leave a lasting impression. Our team works
              closely with clients to understand their vision, ensuring every
              celebration is uniquely tailored. Whether it's a fairytale wedding,
              a lavish corporate gala, or a charming private gathering, Bisha
              Events brings creativity, sophistication, and seamless execution to
              every occasion.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src={ourStory}
              alt="Event Planning"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Meet Our Team Section */}
        <h2 className="section-title">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {/* Our Values Section */}
        <h2 className="section-title">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurStory;
