import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import walima1 from '../assets/walima-1.jpg';
import walima2 from '../assets/walima-2.jpg';
import walima3 from '../assets/walima-3.jpg';
import walima4 from '../assets/walima-4.jpg';
import walima5 from '../assets/walima-5.jpg';
import walima6 from '../assets/walima-6.jpg';
import walima7 from '../assets/walima-7.jpg';

import barat1 from '../assets/barat-1.jpg';
import barat2 from '../assets/barat-2.jpg';
import barat3 from '../assets/barat-3.jpg';
import barat4 from '../assets/barat-4.jpg';
import barat5 from '../assets/barat-5.jpg';
import barat6 from '../assets/barat-6.jpg';
import barat7 from '../assets/barat-7.jpg';
import barat8 from '../assets/barat-8.jpg';
import barat9 from '../assets/barat-9.jpg';

import mehandi1 from '../assets/mehandi-1.jpg';
import mehandi2 from '../assets/mehandi-2.jpg';
import mehandi3 from '../assets/mehandi-3.jpg';
import mehandi4 from '../assets/mehandi-4.jpg';
import mehandi5 from '../assets/mehandi-5.jpg';
import mehandi6 from '../assets/mehandi-6.jpg';
import mehandi7 from '../assets/mehandi-7.jpg';
import mehandi8 from '../assets/mehandi-8.jpg';
import mehandi9 from '../assets/mehandi-9.jpg';

import nikkah1 from '../assets/nikkah-1.jpg';
import nikkah2 from '../assets/nikkah-2.jpg';
import nikkah3 from '../assets/nikkah-3.jpg';
import nikkah4 from '../assets/nikkah-4.jpg';
import nikkah5 from '../assets/nikkah-5.jpg';
import nikkah6 from '../assets/nikkah-6.jpg';
import nikkah7 from '../assets/nikkah-7.jpg';
import nikkah8 from '../assets/nikkah-8.jpg';
import nikkah9 from '../assets/nikkah-9.jpg';
import nikkah10 from '../assets/nikkah-10.jpg';
import nikkah11 from '../assets/nikkah-11.jpg';
import nikkah12 from '../assets/nikkah-12.jpg';

import engagement1 from '../assets/engagement-1.jpg';
import engagement2 from '../assets/engagement-2.jpg';
import engagement3 from '../assets/engagement-3.jpg';
import engagement4 from '../assets/engagement-4.jpg';
import engagement5 from '../assets/engagement-5.jpg';
import engagement6 from '../assets/engagement-6.jpg';
import engagement7 from '../assets/engagement-7.jpg';
import engagement8 from '../assets/engagement-8.jpg';
import engagement9 from '../assets/engagement-9.jpg';


import qawali1 from '../assets/qawali-1.jpg';
import qawali2 from '../assets/qawali-2.jpg';
import qawali3 from '../assets/qawali-3.jpg';
import qawali4 from '../assets/qawali-4.jpg';
import qawali5 from '../assets/qawali-5.jpg';
import qawali6 from '../assets/qawali-6.jpg';

import birthday1 from '../assets/birthday-1.jpg';
import birthday2 from '../assets/birthday-2.jpg';
import birthday3 from '../assets/birthday-3.jpg';
import birthday4 from '../assets/birthday-4.jpg';
import birthday5 from '../assets/birthday-5.jpg';
import birthday6 from '../assets/birthday-6.jpg';


import anniversary1 from '../assets/anniversary-1.jpg';
import anniversary2 from '../assets/anniversary-2.jpg';
import anniversary3 from '../assets/anniversary-3.jpg';
import anniversary4 from '../assets/anniversary-4.jpg';
import anniversary5 from '../assets/anniversary-5.jpg';
import anniversary6 from '../assets/anniversary-6.jpg';
import anniversary7 from '../assets/anniversary-7.jpg';
import anniversary8 from '../assets/anniversary-8.jpg';
import anniversary9 from '../assets/anniversary-9.jpg';

import valentine1 from '../assets/valentine-1.jpg';
import valentine2 from '../assets/valentine-2.jpg';
import valentine3 from '../assets/valentine-3.jpg';
import valentine4 from '../assets/valentine-4.jpg';
import valentine5 from '../assets/valentine-5.jpg';
import valentine6 from '../assets/valentine-6.jpg';


const ServicesView = () => {
  const { serviceId } = useParams();

  const services = {
    'walima-receptions': {
      title: "Walima & Receptions",
      date: "March 2024",
      description:
        "The grand celebration marking the official reception—lavish and unforgettable.",
      images: [walima1, walima2, walima3, walima4, walima5, walima6, walima7],
    },
    'barat-wedding': {
      title: "Barat Wedding Events",
      date: "February 2024",
      description:
        "A vibrant celebration of marriage traditions with rich cultural elements.",
        images: [barat1, barat2, barat3, barat4, barat5, barat6, barat7, barat8, barat9],
    },
    'mehandi-dholki-shendi': {
      title: "Mehandi, Dholki's & Shendi's",
      date: "January 2024",
      description:
        "A colorful pre-wedding celebration filled with music, dance, and traditional henna.",
        images: [mehandi1, mehandi2, mehandi3, mehandi4, mehandi5, mehandi6, mehandi7, mehandi8, mehandi9],
    },
    'nikkah-ceremony': {
      title: "Nikkah Ceremony",
      date: "December 2023",
      description:
        "A solemn and spiritual ceremony marking the union in a traditional setting.",
        images: [nikkah1, nikkah2, nikkah3, nikkah4, nikkah5, nikkah6, nikkah7, nikkah8, nikkah9, nikkah10, nikkah11, nikkah12],
    },
    'engagements': {
      title: "Engagements",
      date: "November 2023",
      description:
        "A romantic occasion celebrating the promise of a lifelong journey together.",
        images: [engagement1, engagement2, engagement3, engagement4, engagement5, engagement6, engagement7, engagement8, engagement9],
    },
    'qawali-nights': {
      title: "Qawali Nights",
      date: "January 2024",
      description:
        "An enchanting night of soulful qawali music and cultural celebration.",
        images: [qawali1, qawali2, qawali3, qawali4, qawali5, qawali6],
    },
    'bridal-shower': {
      title: "Bridal Shower",
      date: "October 2023",
      description:
        "A joyful celebration honoring the bride-to-be with love and laughter.",
        images: [walima1, walima2, walima3, walima4, walima5, walima6, walima7],
    },
    'birthday-celebrations': {
      title: "Birthday Celebrations",
      date: "September 2023",
      description:
        "Fun and festive gatherings to mark another year of life with style.",
        images: [birthday1, birthday2, birthday3, birthday4, birthday5, birthday6],
    },
    'wedding-anniversaries': {
      title: "Wedding Anniversaries",
      date: "August 2023",
      description:
        "A special day to celebrate enduring love and shared memories.",
        images: [anniversary1, anniversary2, anniversary3, anniversary4, anniversary5, anniversary6, anniversary7, anniversary8, anniversary9],
    },
    'valentine-dinners': {
      title: "Valentine Dinners",
      date: "February 2024",
      description:
        "An intimate and romantic dining experience celebrating love.",
        images: [valentine1, valentine2, valentine3, valentine4, valentine5, valentine6],
    },
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="pt-20">
        <div className="container-custom py-20">
          <h1 className="text-3xl font-garamond text-golden">Service not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Service Header */}
      <section className="py-20 bg-golden/5">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <h1 className="text-5xl font-garamond text-golden mb-4">{service.title}</h1>
            <p className="text-golden-dark/80">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`${service.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesView;
