import { motion } from 'framer-motion';
import ourStory from '../assets/our-story.png';
import bismaTeam from '../assets/bisma-team.png';
import harrisTeam from '../assets/harris-team.png';

const OurStory = () => {
  const teamMembers = [
    {
      name: "Harris Saeed",
      role: "Catering & Food",
      description:
        "Owner of Red Chilli Restaurant, bringing years of culinary excellence.",
      image: harrisTeam,
    },
    {
      name: "Bisma Harris",
      role: "Décor Designer & Event Planner",
      description:
        "Creative visionary with a passion for transforming spaces into magical settings.",
      image: bismaTeam,
    },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every detail of your event.",
    },
    {
      title: "Creativity",
      description:
        "Each event is uniquely designed to reflect your personal style.",
    },
    {
      title: "Reliability",
      description: "We deliver on our promises, ensuring peace of mind.",
    },
    {
      title: "Passion",
      description: "We pour our heart into making your dreams come true.",
    },
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
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
              <h3 className="text-2xl mb-4 font-garamond font-semibold text-golden">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurStory;
