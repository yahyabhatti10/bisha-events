import { motion } from 'framer-motion';
import MeerabAndUmer from '../assets/events/mehandi/mehandi-1.jpg';
import MahnoorAndHarris from '../assets/events/walima/walima-2.jpg';
import RamshaAndUmer from '../assets/love-stories/ramshaAndUmer.jpg';

const LoveStories = () => {
  const testimonials = [
    {
      name: "Ramsha & Umer",
      event: "Mehandi",
      quote: "Bisha Events turned our dream wedding into reality. Every detail was perfect!",
      image: RamshaAndUmer,
    },
    {
      name: "Mahnoor & Harris",
      event: "Wedding Reception",
      quote: "Thank you Bisha Events for brining my fairytale to reality! The decor and the food was waaaayyyy more beautiful and flawless than we could’ve imagined it to be! You understood exactly what I was looking for 😍 Definitely one of my most favourite events!! ❤️",
      image: MahnoorAndHarris,
    },
    {
      name: "Meerab & Umer",
      event: "Mayon",
      quote: "Our Mayon event was like stepping into a fairy tale. Every detail was taken care of, making the day feel magical from start to finish. We felt special and truly enjoyed every moment. Their attention to even the smallest detail made our day unforgettable.",
      image: MeerabAndUmer,
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
              <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-70 transition-opacity duration-300">
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
