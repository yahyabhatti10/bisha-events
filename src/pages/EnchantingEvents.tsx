import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import walimaCover from '../assets/walima-cover.png'
import baratCover from '../assets/barat-cover.png'
import mehandiCover from '../assets/mehandi-cover.png'
import nikkahCover from '../assets/nikkah-cover.png'
import engagementCover from '../assets/engagement-cover.png'
import anniversaryCover from '../assets/anniversary-cover.png'
import valentineCover from '../assets/valentine-cover.png'
import birthdayCover from '../assets/birthday-cover.png'
import bridalShowerCover from '../assets/bridalShower-cover.png'
import qawaliCover from '../assets/qawali-cover.png'

const EnchantingEvents = () => {
  const services = [
    {
      id: "walima-receptions",
      title: "Walima & Receptions",
      description:
        "The grand celebration marking the official reception—lavish and unforgettable.",
      image: walimaCover,
    },
    {
      id: "barat-wedding",
      title: "Barat Wedding Events",
      description:
        "A vibrant celebration of marriage traditions with rich cultural elements.",
      image: baratCover,
    },
    {
      id: "mehandi-dholki-shendi",
      title: "Mehandi, Dholki's & Shendi's",
      description:
        "A colorful pre-wedding celebration filled with music, dance, and traditional henna.",
      image: mehandiCover,
    },
    {
      id: "nikkah-ceremony",
      title: "Nikkah Ceremony",
      description:
        "A solemn and spiritual ceremony marking the union in a traditional setting.",
      image: nikkahCover,
    },
    {
      id: "engagements",
      title: "Engagements",
      description:
        "A romantic occasion celebrating the promise of a lifelong journey together.",
      image: engagementCover,
    },
    {
      id: "qawali-nights",
      title: "Qawali Nights",
      description: "An enchanting night of soulful qawali music and cultural celebration.",
      image: qawaliCover,
    },    
    {
      id: "bridal-shower",
      title: "Bridal Shower",
      description:
        "A joyful celebration honoring the bride-to-be with love and laughter.",
      image: bridalShowerCover,
    },
    {
      id: "birthday-celebrations",
      title: "Birthday Celebrations",
      description:
        "Fun and festive gatherings to mark another year of life with style.",
      image: birthdayCover,
    },
    {
      id: "wedding-anniversaries",
      title: "Wedding Anniversaries",
      description:
        "A special day to celebrate enduring love and shared memories.",
      image: anniversaryCover,
    },
    {
      id: "valentine-dinners",
      title: "Valentine Dinners",
      description:
        "An intimate and romantic dining experience celebrating love.",
      image: valentineCover,
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
        <h1 className="section-title">Enchanting Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={`/enchanting-events/${service.id}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="h-64 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-4 font-garamond font-semibold text-golden">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EnchantingEvents;
