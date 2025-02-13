import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import izBaatPakkiCover from '../assets/moments/iz-baatPakki/iz-baatPakki-cover.jpg';
import qawaliNightCover from '../assets/moments/qawaliNight/qawaliNight-cover.jpg';
import walimaEventCover from '../assets/moments/walimaEvent/walimaEvent-cover.jpg';
import baratEventCover from '../assets/moments/baratEvent-red/baratEvent-cover.jpg';
import rzEngagementCover from '../assets/moments/rz-engagement/rz-engagement-cover.jpg';
import nsEngagementCover from '../assets/moments/ns-engagement/ns-engagement-cover.jpg';
import tableDecorCover from '../assets/moments/tableDecor/tableDecor-cover.jpg';
import fatimaMehandiCover from '../assets/moments/fatimaMehandi/fatimaMehandi-cover.jpg';
import mandyCover from '../assets/moments/mandy/mandy-cover.jpg';

const CapturedMoments = () => {
  const galleries = [
    {
      id: "iz-baatPakki",
      title: "IZ - Baat Pakki",
      image: izBaatPakkiCover,
    },
    {
      id: "qawali-night",
      title: "Qawali Night",
      image: qawaliNightCover,
    },
    {
      id: "walima-event",
      title: "Walima Event",
      image: walimaEventCover,
    },
    {
      id: "barat-event",
      title: "Barat Event",
      image: baratEventCover,
    },
    {
      id: "rz-engagement",
      title: "R&Z Engagement",
      image: rzEngagementCover,
    },
    {
      id: "ns-engagement",
      title: "N&S Engagement",
      image: nsEngagementCover,
    },
    {
      id: "table-decor",
      title: "Table Decor",
      image: tableDecorCover,
    },
    {
      id: "fatima-mehandi",
      title: "Fatima's Mehandi",
      image: fatimaMehandiCover,
    },
    {
      id: "mandy",
      title: "Maryam & Yawar",
      image: mandyCover,
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
        <h1 className="section-title">Captured Moments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <Link key={gallery.id} to={`/captured-moments/${gallery.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer w-[325px] h-[425px] mx-auto"
              >
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src={gallery.image}
                    alt={gallery.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {/* Static dark overlay and title */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                  <h3 className="text-golden font-garamond text-2xl font-great-vibes">
                    {gallery.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CapturedMoments;
