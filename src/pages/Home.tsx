import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroBackground from '../assets/home/hero-background.png';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to top
    navigate('/dream-consultation'); // Navigate after scrolling
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-great-vibes text-8xl md:text-7xl mb-6"
          >
            Bisha Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl md:text-3xl mb-8 font-garamond"
          >
            Crafting Timeless Memories with Elegance & Luxury
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [0, -10, 10, 0] }}
            transition={{
              opacity: { duration: 1, delay: 0.6 },
              x: { repeat: Infinity, repeatType: 'loop', duration: 1.5, ease: 'easeInOut' },
            }}
            className="btn-primary"
            onClick={handleButtonClick}
          >
            Plan Your Dream Event
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
