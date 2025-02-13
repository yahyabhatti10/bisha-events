import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import traditionalPakistaniCover from '../assets/savor-the-flavor/traditional-pakistani.jpg'
import chineseCover from '../assets/savor-the-flavor/chinese-fusion.jpg'
import continentalCover from '../assets/savor-the-flavor/continental.jpg'
import bbqCover from '../assets/savor-the-flavor/bbq.jpg'
import streetFoodCover from '../assets/savor-the-flavor/streed-food.jpg'
import dessertsCover from '../assets/savor-the-flavor/desserts.jpg'



const SavorTheFlavor = () => {
  const cuisines = [
    {
      name: "Traditional Pakistani",
      image: traditionalPakistaniCover,
      description: "Authentic Pakistani flavors with a modern twist",
    },
    {
      name: "Chinese Fusion",
      image: chineseCover,
      description: "A perfect blend of Oriental and local tastes",
    },
    {
      name: "Continental",
      image: continentalCover,
      description: "International cuisine for the refined palate",
    },
    {
      name: "BBQ",
      image: bbqCover,
      description: "Grilled to perfection with bold, smoky flavors",
    },
    {
      name: "Desi Street Food",
      image: streetFoodCover,
      description:"Savor the flavors of popular street food including Halwa Poori and Gol Gappy",
    },
    {
      name: "Desserts",
      image: dessertsCover,
      description:"Decadent sweets to round off your meal with a touch of indulgence",
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
        <h1 className="section-title">Savor the Flavor</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48">
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2 font-garamond font-semibold text-golden">{cuisine.name}</h3>
                <p className="text-gray-600">{cuisine.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button className="btn-primary inline-flex items-center gap-2">
            <Download size={20} />
            Download Menu PDF
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SavorTheFlavor;