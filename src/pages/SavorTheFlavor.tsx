import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const SavorTheFlavor = () => {
  const cuisines = [
    {
      name: "Traditional Pakistani",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Authentic Pakistani flavors with a modern twist"
    },
    {
      name: "Chinese Fusion",
      image: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "A perfect blend of Oriental and local tastes"
    },
    {
      name: "Continental",
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "International cuisine for the refined palate"
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
                <h3 className="text-2xl mb-2">{cuisine.name}</h3>
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